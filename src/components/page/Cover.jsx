import React from 'react';

let Cover = React.createClass({
	render() {
		return (
			<div className='cover-container'>
				<div className='jumbotron'>
					{this.props.children}
				</div>
			</div>
		);
	}
})

export default Cover;