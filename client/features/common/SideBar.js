import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Sidebar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="navbar-default sidebar" style={{marginLeft: '-20px'}} role="navigation">
				<div className="sidebar-nav navbar-collapse collapse">
					<ul className="nav in" id="side-menu">
						<li className="sidebar-search">
							<div className="input-group custom-search-form">
								<input type="text" className="form-control" placeholder="Search..."/>
								<span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="fa fa-search"/>
                  </button>
                </span>
							</div>
						</li>

						<li>
							<a href="" onClick={(e) => {
								e.preventDefault();
								browserHistory.push('/student');
							}}>
								<i className="fa fa-dashboard fa-fw"/> &nbsp;Dashboard
							</a>
						</li>
						<li>
							<a href="" onClick={(e) => {
								e.preventDefault();
								browserHistory.push('/topic');
							}}>
								Topic
							</a>
						</li>
						<li>
							<a
								href=""
								onClick={(e) => {
									e.preventDefault();
									browserHistory.push('/mentor');
								}}
							>
								Mentor
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}


export default Sidebar;
