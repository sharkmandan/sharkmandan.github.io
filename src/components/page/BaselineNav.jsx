import React from 'react';

let Page = React.createClass({
	render() {
		let nav = this.props.nav || [];
		if(nav.length === 0) { return null; }
		
		let size = (100 / nav.length) + '%';
		
		var content = [];
		nav.forEach((item, i) => {
			content.push(<a href={item.url || 'javascript://'} className='baseline-link' style={{width:size}} key={i}><div>{item.text}</div></a>);
		});
		
		return (
			<div className='baseline-nav'>
				{content}
			</div>
		);
	}
});

export default Page;