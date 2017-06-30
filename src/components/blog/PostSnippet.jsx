import React from 'react';

class PostSnippet extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let body = this.props.body;
		let html = { __html: body};
		let content = <p>{body} <span className="link">Read Post &raquo;</span></p>

		var img = null;
		if(this.props.image) {
			var path = this.props.image;
			img = (<div className='row banner'>
					<div className='col-xs-12'>
						<div className='post-snippet-bg' style={{backgroundImage:`url('${path}')`}}>
						</div>
					</div>
					</div>
				);
		}
		let tags = '';
		if(this.props.tags && this.props.tags.split) {
			let tagArr = this.props.tags.split(',');
			tags = tagArr.join(', ');
		}

		console.log(body);

		return (
			<a href={`#/posts/${this.props.id}`} className='post-snippet'>
				<div className='row post-snippet-title'>
					<div className='col-xs-12'>
						<h2>{this.props.title}</h2>
					</div>
				</div>
				{img}
				<div className='row post-snippet-subtitle'>
					<div className='col-xs-4'>
						<h4>{this.props.formattedDate}</h4>
					</div>
					<div className='col-xs-offset-2 col-xs-6 tags'>
						<h4><span className='glyphicon glyphicon-tags' /> {tags}</h4>
					</div>
				</div>
				<div className='row post-snippet-body'>
					<div className='col-xs-12'>
						{content}
					</div>
				</div>
			</a>
		)
	}
}

export default PostSnippet;