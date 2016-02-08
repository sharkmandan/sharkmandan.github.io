import React from 'react';
import Page from '../page/Page.jsx';
import Cover from '../page/Cover.jsx';
import BaselineNav from '../page/BaselineNav.jsx';
import Body from '../page/Body.jsx';

class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (<Page title='sharkmandan' coverPhoto='about' blankNav={true}>
				<Cover>
					<div className='container'>
						<div className='row'>
							<div className='col-xs-12 jumbotron-content'>
								<div className='center-block'>
									<div className='shark-fin profile pull-left'></div>
									<h1>About</h1>
									<h4>sharkmandan.com</h4>
								</div>
							</div>
						</div>
					</div>
					
					<BaselineNav nav={[{text: 'Home', url:'#/'}, {text: 'Posts', url:'#/posts'}, {text: 'Projects', url:'#/projects'}]} />
				</Cover>
				<Body>
					<div className='about'>
						<h2>About</h2>
						<p>Welcome! 
							I am experimenting with web technologies new and old. 
							As I use something for the first time I try to post about how it works and the challenges I had 
							(even if it's alread been done).
						</p>
						<p>As a practical example, I try to utilize all of the experiments within this site or one of my <a href='#/projects'>projects</a>.
							If there is any level of complication beyond a code snippet, I try to put the source on GitHub as a stand-alone project. 
							It should be easy to follow along, hope you enjoy!
						</p>
					</div>
				</Body>
			</Page>
		);
	}
}

export default About;