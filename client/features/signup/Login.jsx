import React from 'react';
import {Link, browserHistory} from 'react-router';
import '../../styles/Login.css';

class Login extends React.Component{
    render() {
    return (
      <div>
				<div className="log">
					<img id="edtrack-logo" src={require('../../../public/edTrack.png')} /><br/>
					<h4 id="signup">Log into EdTrack</h4>
					<form >
						<input id="email-in" type="email" placeholder="School email address"  required/>
						<br/>
						<input id="password-in" type="password" placeholder="Create a password" required/>
						<br/>
						<input id="create-account" type="button" onClick={()=>browserHistory.push('/upload-picture')} value="Log In" />
						<p id="have-account">Don't have an account?<Link to="/signup"><strong> Sign up</strong></Link></p>
					</form>
				</div>
      </div>
    );
  }
}

export default Login;

