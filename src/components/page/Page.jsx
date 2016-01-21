import React from 'react';
import NavBar from './NavBar.jsx';
import CoverPhoto from './CoverPhoto.jsx';
require("stylesheets/base");

let Page = React.createClass({
	render() {
		var coverPhoto = this.props.coverPhoto;
		var title = this.props.title;
		return (
			<div>
				<CoverPhoto photo={coverPhoto} ext={this.props.ext} />
				<NavBar title={title} blankNav={this.props.blankNav} />
				<div className='page'>
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default Page;