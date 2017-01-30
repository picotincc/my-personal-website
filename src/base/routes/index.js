import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'base/containers/App.js';

const pc = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('pc/containers/App.js').default);
	}, 'pc');
};

const course = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('mobile/containers/App.js').default);
	}, 'mobile');
};




const routes = (
    <div>
		<Route path='/' component={App}>
			      <IndexRoute getComponent={pc} />
            <Route path='home' getComponent={home} />
						<Route path='course' getComponent={course} />
		</Route>
    </div>
);

export default routes;
