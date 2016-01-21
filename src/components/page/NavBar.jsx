import React from 'react';

let NavBar = React.createClass({
	render() {
		let extraClasses = 'navbar-clear';
		let navClass = this.props.blankNav ? 'navbar-clear-all' : '';
		
		
		return (
			<nav className={`navbar navbar-inverse navbar-fixed-top ${extraClasses}`} id='header'>
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">{this.props.title}</a>
					</div>
					<div id="navbar" className={`collapse navbar-collapse pull-right ${navClass}`}>
						<ul className='nav navbar-nav'>
							<li>
								<a href="#/posts">Posts</a>
							</li>
							<li>
								<a href="http://00000000-0000-0000-0000-000000000000.com/" target="_blank">Projects</a>
							</li>
							<li>
								<a href="#/about">About</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
})

export default NavBar;