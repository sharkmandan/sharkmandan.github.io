import React from 'react';
import Page from '../page/Page.jsx';
import Cover from '../page/Cover.jsx';
import BaselineNav from '../page/BaselineNav.jsx';
import Body from '../page/Body.jsx';
import PostSnippet from '../blog/PostSnippet.jsx';

export class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
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
					<BaselineNav nav={[{text: 'Posts', url:'#/posts'}, {text: 'Projects', url:'http://00000000-0000-0000-0000-000000000000.com/'}, {text: 'About', url:'#/about'}]} />
				</Cover>
				
				<Body>
					<div className='prev-posts'>
						<div className='row'>
							<div className='col-md-6 col-xs-12'>
								<h1>Posts</h1>
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

export default Home;