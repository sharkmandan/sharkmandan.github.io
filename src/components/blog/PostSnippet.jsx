import React from 'react';

class PostSnippet extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props.children);
		let body = null;
		
		var i = 0;
		React.Children.forEach(this.props.children, (child) => {
			if(i === 0) { body = child; } 
			i++;
		});
		
		return (
			<div className='post-snippet'>
				<div className='row'>
					<div className='col-xs-12'>
						<h2>{this.props.title}</h2>
						<h4>{this.props.formattedDate}</h4>
					</div>
				</div>
				<div className='row'>
					<div className='col-xs-12'>
						{body}
						
					</div>
				</div>
			</div>
		)
		
		// <a href={`#/posts/${this.props.id}`}>Read Post &raquo;</a>
	}	
}

export default PostSnippet;