import React from 'react';
import marked from 'marked';
import Page from '../page/Page.jsx';
import Cover from '../page/Cover.jsx';
import BaselineNav from '../page/BaselineNav.jsx';
import Body from '../page/Body.jsx';
import PostSnippet from '../blog/PostSnippet.jsx';


class Post extends React.Component {
	constructor(props) {
		super(props);
		var self = this;
		let id = props.params.id;
		fetch(`/posts/${id}.json`).then(function(response) {
			return response.json();
		}).then(function(obj) {
			self.setState({meta: obj});
		});
		fetch(`/posts/${id}.md`).then(function(response) {
			return response.text();
		}).then(function(txt) {
			self.setState({content: txt});
		});
	}
	render() {
		var content = <div>. . .</div>;
		let title = this.state && this.state.meta ? this.state.meta.title : '. . .';
		if(this.state && this.state.content) {
			content = this.state.content;
			content = marked(content);
			console.log(content);
		}

		return (<Page title={title} coverPhoto={`../../../src/images/posts/${this.props.params.id}/preview`} blankNav={true}>
				<Cover>
					<div className='container'>
						<div className='row'>
							<div className='col-xs-12 jumbotron-content'>
								<div className='center-block'>
									<h1>{title}</h1>
								</div>
							</div>
						</div>
					</div>
				</Cover>
				<Body>
					<div className='post'>
						<div className='row'>
							<div className='col-md-8 col-xs-12 col-md-offset-2'>
								<div dangerouslySetInnerHTML={{__html: content}}></div>
							</div>
						</div>
					</div>
				</Body>
			</Page>
		);
	}
}

export default Post;