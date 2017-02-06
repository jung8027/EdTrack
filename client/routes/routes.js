import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../features/app/App';
import StudentContainer from '../features/student/StudentContainer';
import Mentor from '../features/mentor/Mentor';
import Grade from '../features/grade/Grade';


export default (
	<Route path="/" component={App}>
		<Route path='/student' component={StudentContainer}/>
		<Route path='/mentor' component={Mentor}/>
		<Route path='/grade' component={Grade}/>
	</Route>
);
