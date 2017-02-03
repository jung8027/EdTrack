import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../features/app/App';
import Student from '../features/student/Student';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Student}/>
	</Route>
);
