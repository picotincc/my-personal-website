import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';



import routes from './routes';
import App from './containers/App';

injectTapEventPlugin();


const rootElement = document.getElementById('root');

render(
    <App>
        <Router history={browserHistory} routes={routes}>
        </Router>
    </App>,
    rootElement
);
