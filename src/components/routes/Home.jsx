import React from 'react';
import Page from '../page/Page.jsx';
import Cover from '../page/Cover.jsx';
import BaselineNav from '../page/BaselineNav.jsx';
import Body from '../page/Body.jsx';
import PostSnippet from '../blog/PostSnippet.jsx';

export class Home extends React.Component {
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
		const max = 5;
		var posts = <div>loading...</div>;
		var rankings = <div>loading...</div>;
		if(this.state && this.state.posts && this.state.posts.length !== 0) {
			posts = [];
			rankings = [];
			for(var i = 0; i < max && i < this.state.posts.length; i++) {
				var item = this.state.posts[i];
				var dt = item.date.substr(0, item.date.indexOf('T'));
				var out = (<PostSnippet title={item.title} formattedDate={dt} tags={item.tags} id={item.id} image={item.banner_image} body={item.content_html} url={item.url} />);
				posts.push(out);
			}

			for(var i = 0; i < max && i < this.state.posts.length; i++) {
				var item = this.state.posts[i];
				if(item.id.indexOf('ranking') === -1) continue;
				var dt = item.date.substr(0, item.date.indexOf('T'));
				var out = (<PostSnippet title={item.title} formattedDate={dt} tags={item.tags} id={item.id} image={item.banner_image} body={item.content_html}  />);
				rankings.push(out);
			}
		}

		return (
			<Page title='sharkmandan' coverPhoto='home' ext='.png' blankNav={true}>
				<Cover>
					<div className='container'>
						<div className='row'>
							<div className='col-xs-12 jumbotron-content'>
								<div className='center-block'>
									<div className='shark-fin profile pull-left'></div>
									<h1>sharkmandan</h1>
									<h4>Temecula, CA</h4>
								</div>
							</div>
						</div>
					</div>
					<BaselineNav nav={[{text: 'Posts', url:'#/posts'}, {text: 'Projects', url:'#/projects'}, {text: 'About', url:'#/about'}]} />
				</Cover>
				
				<Body>
					<div className='prev-posts'>
						<div className='row'>
							<div className='col-md-6 col-xs-12'>
								<h1>Posts</h1>
								{posts}
							</div>
							<div className='col-md-5 col-md-offset-1 col-xs-12'>
								<h1>Rankings</h1>
								{rankings}
							</div>
						</div>
					</div>
				</Body>
			</Page>
		);
	}
}

export default Home;