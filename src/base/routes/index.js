import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'base/containers/App.js';

const pc = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('pc/containers/App.js').default);
	}, 'pc');
};

const mobile = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('mobile/containers/App.js').default);
	}, 'mobile');
};




const routes = (
    <div>
		<Route path='/' component={App}>
			<IndexRoute getComponent={pc} />
            <Route path='pc' getComponent={pc} />
			<Route path='mobile' getComponent={mobile} />
		</Route>
    </div>
);

export default routes;
