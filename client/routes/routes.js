import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../features/app/App';
import MentorContainer from '../features/mentor/MentorContainer';
import StudentContainer from '../features/student/StudentContainer.jsx';
import InstructorContainer from '../features/instructor/InstructorContainer';
import MentorTopic from '../features/mentorTopicList/MentorTopic.jsx';
import Signup from '../features/signup/SignUp.jsx';
import Login from '../features/signup/Login.jsx';
import UploadPicture from '../features/signup/UploadPicture.jsx';
import ChangePicture from '../features/signup/ChangePicture.jsx';
import Match from "../features/match/Match.jsx";

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Login}/>
		<Route path="/student/:id" component={StudentContainer}/>
		<Route path="/instructor/:id" component={InstructorContainer}/>
		<Route path="/instructor/:id/mentor" component={MentorContainer}/>
		<Route path="/instructor/:id/mentor/:mentorId" component={MentorTopic}/>
		<Route path="/instructor/:id/match/" component={Match}/>
		<Route path="/signup" component={Signup}/>
		<Route path="/login" component={Login}/>
		<Route path="/upload-picture" component={UploadPicture}/>
		<Route path="/change-picture" component={ChangePicture}/>
		<Route path="/match" component={Match}/>
	</Route>
);
