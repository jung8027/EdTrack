import React from 'react';
import {
	NavDropdown,
	MenuItem
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import $ from "jquery";
import {browserHistory} from 'react-router';


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
				<ul className="nav navbar-top-links navbar-left">
					<li>
						<a href="" onClick={(e) => {
							e.preventDefault();
							browserHistory.push('/');
						}}>
							<i className="fa fa-dashboard fa-fw"/> &nbsp;Dashboard
						</a>
					</li>
					<NavDropdown title={<i className="fa fa-user fa-fw"/> } id='navDropdown4'>
						<MenuItem eventKey="1">
							<span> <i className="fa fa-user fa-fw"/> Student Profile </span>
						</MenuItem>
						<MenuItem divider/>
						<MenuItem eventKey="4">
							<span> <i className="fa fa-sign-out fa-fw"/> Signout </span>
						</MenuItem>
						<MenuItem divider/>
					</NavDropdown>

				</ul>
			</Navbar>
		</div>
	);
}
function toggleMenu() {
	if ($(".navbar-collapse").hasClass('collapse')) {
		$(this).removeClass('collapse');
	}
	else {
		$(".navbar-collapse").addClass('collapse');
	}
}

export default Header;
