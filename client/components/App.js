//This component handles the App template used on every page
import React, {PropTypes} from 'react';

class App extends React.Component{
	render(){
		return (
			<div className ="container-fluid">
				<h1>EdTrack</h1>
				<h2>Performance Tracker</h2>
			</div>
		);
	}
}

export default App;
