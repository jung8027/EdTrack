import React from 'react';
import {Link, browserHistory} from 'react-router';
import '../../styles/Login.css';

class Login extends React.Component{

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {pass:''};
	}

	handleChange(event){
		this.setState({pass: event.target.value});
	}

	handleClick(){
		(this.state.pass === 'iiii')
			? browserHistory.push('/instructor/1')
			: browserHistory.push('/upload-picture');
	}

	render(){
		return (
			<div>
				<div className="log">
					<img id="edtrack-logo" src={require('../../../public/edTrack.png')} /><br/>
					<h4 id="signup">Log into EdTrack</h4>
						<form >
							<input id="email-in" type="email" placeholder="School email address"  required/>
							<br/>
							<input id="password-in" type="password" onChange={this.handleChange} placeholder="Create a password" required/>
							<br/>
							<input id="create-account" type="button" onClick={this.handleClick} value="Log In" />
							<p id="have-account">Don't have an account?
								<Link to="/signup">
									<strong> Sign up</strong>
								</Link>
							</p>
						</form>
				</div>
			</div>
		);
	}
}

export default Login;

