// import React, { PropTypes } from 'react';
// import { PageHeader } from 'react-bootstrap';
//
//
// const Display= (props) => {
// 	return (
// 		<div>
// 			<div className="row">
// 				<div className="col-lg-12">
// 					<PageHeader>EdTrack</PageHeader>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
//
//
// export default Display;

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
	Nav,
	NavDropdown,
	MenuItem
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import $ from "jquery";
import Sidebar from './SideBar';

// const logo = require('./logo.png');

function Header() {
	return (
		<div id="wrapper" className="content">
			<Navbar fluid={true} style={ {margin: 0} }>
				<Brand>
            <span>
              <img src="" alt="EdTrack" title="EdTrack"/>
                <button type="button" className="navbar-toggle" onClick={() => {
					toggleMenu();
				}} style={{position: 'absolute', right: 0, top: 0}}>
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                </button>
            </span>
				</Brand>
				<ul className="nav navbar-top-links navbar-right">

					<NavDropdown title={<i className="fa fa-user fa-fw"/> } id='navDropdown4'>
						<MenuItem eventKey="1">
							<span> <i className="fa fa-user fa-fw"/> Student Profile </span>
						</MenuItem>
						<MenuItem divider/>
						<MenuItem eventKey="4" onClick={(event) => {
							history.push('/login');
						}}>
							<span> <i className="fa fa-sign-out fa-fw"/> Logout </span>
						</MenuItem>
						<MenuItem divider/>
					</NavDropdown>

				</ul>
			</Navbar>
			<Sidebar />
		</div>
	);
}
function toggleMenu() {
	if ($(".navbar-collapse").hasClass('collapse')) {
		$(".navbar-collapse").removeClass('collapse');
	}
	else {
		$(".navbar-collapse").addClass('collapse');
	}
}

export default Header;
