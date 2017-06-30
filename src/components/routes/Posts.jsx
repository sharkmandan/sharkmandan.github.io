import React from 'react';
import Page from '../page/Page.jsx';
import Cover from '../page/Cover.jsx';
import BaselineNav from '../page/BaselineNav.jsx';
import Body from '../page/Body.jsx';
import PostSnippet from '../blog/PostSnippet.jsx';

class Posts extends React.Component {
	constructor(props) {
		super(props);
		var self = this;
		fetch('feed.json').then(function(response) {
			return response.json();
		}).then(function(obj) {
			self.setState({posts:obj.items});
		});
	}
	render() {
		var posts = <div>loading...</div>;
		if(this.state && this.state.posts && this.state.posts.length !== 0) {
			posts = [];
			for(var i = 0; i < this.state.posts.length; i++) {
				var item = this.state.posts[i];
				var dt = item.date.substr(0, item.date.indexOf('T'));
				var out = (<PostSnippet title={item.title} formattedDate={dt} tags={item.tags} id={item.id} image={item.banner_image} body={item.content_html} url={item.url} />);
				posts.push(out);
			}
		}

		return (<Page title='Posts' coverPhoto='posts' blankNav={true}>
				<Cover>
					<div className='container'>
						<div className='row'>
							<div className='col-xs-12 jumbotron-content'>
								<div className='center-block'>
									<div className='shark-fin profile pull-left'></div>
									<h1>Blog Posts</h1>
								</div>
							</div>
						</div>
					</div>
					
					<BaselineNav nav={[{text: 'Home', url:'#/'}, {text: 'Projects', url:'#/projects'}, {text: 'About', url:'#/about'}]} />
				</Cover>
				<Body>
					<div className='posts'>
						<div className='row'>
							<div className='col-md-8 col-xs-12 col-md-offset-2'>
								{posts}
							</div>
						</div>
					</div>
				</Body>
			</Page>
		);
	}
}

export default Posts;