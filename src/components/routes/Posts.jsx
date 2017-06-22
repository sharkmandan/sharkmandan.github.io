import React from 'react';
import Page from '../page/Page.jsx';
import Cover from '../page/Cover.jsx';
import BaselineNav from '../page/BaselineNav.jsx';
import Body from '../page/Body.jsx';
import PostSnippet from '../blog/PostSnippet.jsx';

class Posts extends React.Component {
	constructor(props) {
		fetch('posts/map.json').then(function(response) {
			return response.json();
		}).then(function(obj) {
			this.setState({posts:obj.posts});
		});
		super(props);
	}
	render() {
		var posts = null;
		if(!this.state.posts || this.state.posts.length === 0) {
			posts = <div>loading...</div>
		}
		else {
			posts = [];
			for(var i = 0; i < this.state.posts.length; i++) {
				var item = this.state.posts[i];
				var out = (<PostSnippet title={item.title} formattedDate={item.date} tags={item.tags} id={item.slug}>{item.title}</PostSnippet>);
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
									<h4>Welcome!</h4>
								</div>
							</div>
						</div>
					</div>
					
					<BaselineNav nav={[{text: 'Home', url:'#/'}, {text: 'Projects', url:'#/projects'}, {text: 'About', url:'#/about'}]} />
				</Cover>
				<Body>
					<div className='posts'>
						<div className='row'>
							<div className='col-md-6 col-xs-12'>
								<h1>Posts</h1>
								{posts}
								<PostSnippet title='Welcome!' formattedDate='2016 Jan 20' tags={['General']} id='2016-01-20--welcome'>
									Welcome to the new and improved sharkmandan.com! 
									Nearly all the blog-posts entered on this site will be programming related. I may still cross-post a few things to medium, 
									or add non-programming posts to both medium and sharkmandan.com. For the historical medium posts, see the section to the right/bottom (responsive woo!).
								</PostSnippet>
							</div>
							<div className='col-md-5 col-md-offset-1 col-xs-12'>
								<br /><br />
								<script async src="https://static.medium.com/embed.js"></script><a className="m-profile" href="https://medium.com/@sharkmandan">sharkmandan on Medium</a>
							</div>
						</div>
					</div>
				</Body>
			</Page>
		);
	}
}

export default Posts;