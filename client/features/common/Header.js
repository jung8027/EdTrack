import React from 'react';
import {
	NavDropdown,
	MenuItem
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import $ from "jquery";
import {browserHistory} from 'react-router';
import '../../styles/Header.css';


function Header() {
	return (
		<div id="wrapper1" className="content" style={wrapper1}>

			<div id="wrapper" className="content" style={headingLogOut}>
					<ul className="nav navbar-top-links navbar-left">
						<NavDropdown title='' id='navDropdown4'>
							<MenuItem eventKey="4">
								<span onClick={()=>browserHistory.push(`/`)}> <i className="fa fa-sign-out fa-fw"/> Signout </span>
							</MenuItem>
						</NavDropdown>
					</ul>
			</div>

			<div id="hoverHome">
					<p id="homeNav" onClick={()=> browserHistory.push(`/instructor/1`)}>Home</p>
			</div>

		</div>
	);
}


let headingLogOut = {
	marginLeft:"65px",
	marginTop: "-55px"
};
let wrapper1 = {
	display: "flex",
};

let homeLink = {
	marginTop: "-41px",
	marginLeft: "22px",
	transition: "color .28s ease",
	width: "45px",
	height: "19px",
	fontFamily: "Rubik",
	fontSize: "22px",
	fontWeight: "500",
	lineHeight: "19px",
	color: "#545F7A",
	onMouseOver:"this.style.color='#0F0'"
};

export default Header;

