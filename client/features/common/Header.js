import React from 'react';
import {
	NavDropdown,
	MenuItem
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import $ from "jquery";
import {browserHistory} from 'react-router';
import '../../styles/Header.css';

const Header = () =>{
	return (
		<div id="wrapper" className="content" style={headingLogOut}>
				<ul className="nav navbar-top-links navbar-left">
					<NavDropdown title='' id='navDropdown4'>
						<MenuItem eventKey="4">
							<span onClick={()=>browserHistory.push(`/`)}> <i className="fa fa-sign-out fa-fw"/> Signout </span>
						</MenuItem>
					</NavDropdown>
				</ul>
		</div>
	);
}

let headingLogOut = {
	marginLeft:"65px",
	marginTop: "-55px"
};


export default Header;
