import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../features/app/App';
import MentorContainer from '../features/mentor/MentorContainer';
import StudentContainer from '../features/student/StudentContainer.jsx';
import InstructorContainer from '../features/instructor/InstructorContainer';
import MentorTopic from '../features/mentorTopicList/MentorTopic';
import Signup from '../features/signup/Signup';
import Login from '../features/signup/Login';
import UploadPicture from '../features/signup/UploadPicture';
import ChangePicture from '../features/signup/ChangePicture';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Login}/>
		<Route path="/student/:id" component={StudentContainer}/>
		<Route path="/instructor/:id" component={InstructorContainer}/>
		<Route path="/instructor/:id/mentor" component={MentorContainer}/>
		<Route path="/instructor/:id/mentor/:mentorId" component={MentorTopic}/>
		<Route path="/signup" component={Signup}/>
		<Route path="/login" component={Login}/>
		<Route path="/upload-picture" component={UploadPicture}/>
		<Route path="/change-picture" component={ChangePicture}/>
	</Route>
);
