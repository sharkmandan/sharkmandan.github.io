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
		console.log('fetching...');
		fetch('feed.json').then(function(response) {
			console.log('HERE!');
			console.log(response);
			return response.json();
		}).then(function(obj) {
			console.log(obj);
			console.log(obj.items);
			self.setState({posts:obj.items});
		});
	}
	render() {
		var posts = <div>loading?</div>;
		if(this.state && this.state.posts && this.state.posts.length !== 0) {
			posts = [];
			for(var i = 0; i < this.state.posts.length; i++) {
				var item = this.state.posts[i];
				var dt = item.date.substr(0, item.date.indexOf('T'));
				console.log(dt);
				var out = (<PostSnippet title={item.title} formattedDate={dt} tags={item.tags} id={item.id}>{item.description}</PostSnippet>);
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