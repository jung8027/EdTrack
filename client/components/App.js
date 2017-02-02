//This component handles the App template used on every page
import React, {PropTypes} from 'react';

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<h1>EdTrack</h1>
				<h2>Performance Tracker</h2>
				{this.props.children}
			</div>
		);
	}
}
App.propTypes = {
	children: PropTypes.object
};


export default App;
