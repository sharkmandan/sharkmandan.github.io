import React from 'react';

class PostSnippet extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let body = null;
		
		var i = 0;
		React.Children.forEach(this.props.children, (child) => {
			if(i === 0) { body = child; } 
			i++;
		});

		var textClass = "col-xs-12";
		var img = null;
		if(this.props.image) {
			img = <img src={this.props.image} className="post-thumb" style={{float: left}} />
			textClass = "col-xs-8";
		}
		
		return (
			<div className='post-snippet'>
				{img}
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