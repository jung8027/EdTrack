import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../features/app/App';
import MentorContainer from '../features/mentor/MentorContainer';
import StudentContainer from '../features/student/StudentContainer';
import Grade from '../features/grade/Grade';
import TopicContainer from '../features/topic/TopicContainer';


export default (
	<Route path="/" component={App}>
		<Route path="/student" component={StudentContainer}/>
		<Route path="/mentor" component={MentorContainer}/>
		<Route path="/grade" component={Grade}/>
		<Route path="/topic" component={TopicContainer}/>
	</Route>
);
