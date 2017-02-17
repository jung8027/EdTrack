import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../features/app/App';
import MentorContainer from '../features/mentor/MentorContainer';
import StudentContainer from '../features/student/StudentContainer.jsx';
import Student from '../features/student/Student.jsx';

import TopicContainer from '../features/topic/TopicContainer';
import GradeContainer from '../features/grade/GradeContainer';

export default (
	<Route path="/" component={App}>
		<Route path="student/:id" component={StudentContainer}/>
		<Route path="mentor" component={MentorContainer}/>
	</Route>
);
