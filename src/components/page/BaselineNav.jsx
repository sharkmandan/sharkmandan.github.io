import React from 'react';

let Page = React.createClass({
	render() {
		let nav = this.props.nav || [];
		if(nav.length === 0) { return null; }
		
		let size = (100 / nav.length) + '%';
		console.log(size);
		console.log(nav);
		
		var content = [];
		nav.forEach((item, i) => {
			console.log('NAVITEM', item);
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