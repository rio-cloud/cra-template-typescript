import './utils/polyfills';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { config } from './config';
import { main } from './configuration';
import { store } from './configuration/setup/store';
import { handleLoginRedirect } from './configuration/login/redirect';
import { ErrorBoundary } from './components/ErrorBoundary';
import App from './layout//App';

const renderApplication = () => {
    const root = document.getElementById('root');

    ReactDOM.render(
        <ErrorBoundary>
            <Provider store={store}>
                <HashRouter>
                    <App />
                </HashRouter>
            </Provider>
        </ErrorBoundary>,
        root
    );
};

if (window.location.href.startsWith(config.login.redirectUri as string)) {
    handleLoginRedirect();
} else {
    main(renderApplication);
}
