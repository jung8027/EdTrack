//This component handles the App template used on every page
import React, {PropTypes} from 'react';
import Header from '../common/Header';
class App extends React.Component {
	render() {
		return (
			<div className="container-fluid" style={AppStyles}>
				{/*	<Header/>*/}
				{this.props.children}
			</div>
		);
	}
}
let AppStyles ={
	backgroundColor:"white"
};

App.propTypes = {
	children: PropTypes.object
};


export default App;
