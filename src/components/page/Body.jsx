import React from 'react';

let Body = React.createClass({
	render() {
		return (
			<div className='body-content'>
				<div className='body container'>
					{this.props.children}
				</div>
			</div>
		);
	}
})

export default Body;