import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../features/app/App';
import Student from '../features/student/Student';
import MentorContainer from '../features/mentor/MentorContainer';
import Grade from '../features/grade/Grade';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Student}/>
		<Route path='/mentor' component={MentorContainer}/>
		<Route path='/grade' component={Grade}/>
	</Route>
);
