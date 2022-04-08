import { config } from '../../config';
import { trace } from './trace';
import { routeStorage } from '../login/storage';
import { reportErrorToSentry } from './sentry';
import { UserManager } from 'oidc-client';

const param = (window: Window, regex: RegExp, defaultValue = null) => {
    let result = defaultValue;
    decodeURI(window.location.href).replace(regex, (substring, it) => {
        result = it;
        return substring;
    });
    return result;
};

const saveCurrentRoute = () => {
    const initialRoute = [window.location.hash, window.location.search].join('').replace(/^#/u, '');
    routeStorage.saveRoute(initialRoute);
    trace('saving initial route', initialRoute);
};

export const attemptInitialSignIn = async (userManager: UserManager) => {
    const isFreshRedirect = Boolean(param(window, /.*code=([^&]+)/u));

    try {
        const user = await userManager.signinSilent();
        const initialRoute = routeStorage.getRoute();

        trace('initialRoute lookup', initialRoute);

        if (initialRoute && isFreshRedirect) {
            trace(`Go to location "/${initialRoute}"`);
            window.location.replace(`#/${initialRoute}`);
        }

        routeStorage.discardRoute();
        return await Promise.resolve(user);
    } catch (error) {
        trace('oidc.signinSilent failed, trying page redirect...', error);

        if (config.login.preventRedirect) {
            // eslint-disable-next-line no-console
            console.warn('[feature/login] redirect prevented due to config. Error was', error);
        } else if (isFreshRedirect) {
            trace('oidc.signinSilent.error', 'redirect prevented due to supsicious signin error', error);
            routeStorage.discardRoute();
            reportErrorToSentry(error);
        } else {
            saveCurrentRoute();
            userManager.signinRedirect();
        }

        trace('auth problem?', error);
        throw new Error('Need to sign in');
    }
};
