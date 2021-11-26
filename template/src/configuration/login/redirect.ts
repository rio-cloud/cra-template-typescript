import { Log, UserManager } from 'oidc-client';

export const handleLoginRedirect = () => {
    const runsInIframe = window && window.parent && window.parent !== window;

    if (runsInIframe) {
        // Silent redirect within an <iframe>
        Log.logger = console;
        Log.level = Log.INFO;

        // This will propagate the received information provided via
        // query parameters to the parent frame
        new UserManager({}).signinSilentCallback();
    } else {
        window.location.replace(`${window.location.origin}#/?${window.location.hash.replace('#', '')}`);
    }
};
