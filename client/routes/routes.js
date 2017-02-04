import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../features/app/App';
import Student from '../features/student/Student';
import Mentor from '../features/mentor/Mentor';
import Grade from '../features/grade/Grade';
import TopicForm from '../features/topic/TopicForm';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Student}/>
		<Route path='/mentor' component={Mentor}/>
		<Route path='/grade' component={Grade}/>
		<Route path='/grade' component={Grade}/>
		<Route path='/topic' component={TopicForm}/>
	</Route>
);
