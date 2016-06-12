import React from 'react';
import { Route } from 'react-router';
import { NAVIGATION } from './constants/navigation';
import AppContentContainer from './containers/appContainer';
import Home from './containers/homeContainer';

export default (
	<Route component={AppContentContainer}>
		<Route path={NAVIGATION.HOME.LINK} component={Home} />
	</Route>
);
