import React from 'react';
import $ from "jquery";
import {browserHistory} from 'react-router';


const Header = ()=> {
	return (
		<div>
			<img style={{align:"left"}} src="/a4660052d5b6fee6192db0b5aeede812.png"/>
			<a className='dropdown-button btn' data-activates='dropdown1'>Home</a>
			<ul id='dropdown1' className='dropdown-content'>
				<li><a href="">Sign Out</a></li>
			</ul>
		</div>
	);
};

export default Header;
