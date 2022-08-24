import { FormattedMessage } from 'react-intl';
import { NavLink, Link } from 'react-router-dom';

import { DefaultUserMenu } from '@rio-cloud/rio-user-menu-component';
import { RioNotifications } from '@rio-cloud/rio-notifications-component';
import ApplicationHeader from '@rio-cloud/rio-uikit/lib/es/ApplicationHeader';
import IframeResizer from 'iframe-resizer-react';

import { config } from '../../config';
import ServiceInfo from './ServiceInfo';

const AppHeader = () => {
    const navItems = [
        {
            key: 'intro',
            route: (
                <NavLink to={'/intro'}>
                    <FormattedMessage id={'intl-msg:starterTemplate.sublink.intro'} />
                </NavLink>
            ),
        },
        {
            key: 'more',
            route: (
                <NavLink to={'/more'}>
                    <FormattedMessage id={'intl-msg:starterTemplate.sublink.more'} />
                </NavLink>
            ),
        },
    ];

    const environment = process.env.NODE_ENV === 'production' ? 'production' : 'local';

    const serviceInfoItem = <ServiceInfo />;
    const notifications = <RioNotifications />;
    const userMenuItem = <DefaultUserMenu environment={environment} />;

    return (
        <ApplicationHeader
            label={<FormattedMessage id={'intl-msg:starterTemplate.moduleName'} />}
            appNavigator={<IframeResizer className={'iFrameResizer'} src={config.backend.MENU_SERVICE} />}
            homeRoute={<Link to={config.homeRoute || ''} />}
            navItems={navItems}
            actionBarItems={[serviceInfoItem, notifications, userMenuItem]}
        />
    );
};

export default AppHeader;
