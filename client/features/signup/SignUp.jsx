// components SignUp, (UploadTest is test)

import React from 'react';
import {Link, browserHistory} from 'react-router';
import '../../styles/SignUp.css';

class Signup extends React.Component{
	submitLogin(){
		browserHistory.push('/upload-picture')
	}

	render() {
    return (
      <div>
		    <div className="log">
		    	<img id='edtrack-logo' src={require('../../../public/edTrack.png')} /><br/>
		    	<h4 id="signup">Sign Up</h4>
							<form >
							    <input id="email-in" type="email" placeholder="School email address"  required/>
		              <br></br>
							    <input id="password-in" type="password" placeholder="Create a password" required/>
		              <br></br>
							    <input id="create-account" type="button" onClick={this.submitLogin} value="Create your account" />
							    <p id="have-account">Already have an account? <Link to="/login"><strong>Sign in</strong></Link></p>
							</form>
		    </div>
      </div>
    )
  }
}

export default Signup;

