import React from 'react';
import Page from '../page/Page.jsx';
import Cover from '../page/Cover.jsx';
import BaselineNav from '../page/BaselineNav.jsx';
import Body from '../page/Body.jsx';
import PostSnippet from '../blog/PostSnippet.jsx';

class Posts extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (<Page title='Projects' coverPhoto='posts' blankNav={true}>
				<Cover>
					<div className='container'>
						<div className='row'>
							<div className='col-xs-12 jumbotron-content'>
								<div className='center-block'>
									<div className='shark-fin profile pull-left'></div>
									<h1>Projects</h1>
								</div>
							</div>
						</div>
					</div>
					
					<BaselineNav nav={[{text: 'Home', url:'#/'}, {text: 'Posts', url:'#/posts'}, {text: 'About', url:'#/about'}]} />
				</Cover>
				<Body>
					<div className='projects'>
						<div className='row'>
							<div className='col-md-12 col-sm-hidden'>
								<h1>Projects</h1>
							</div>
						</div>
						<div className='row'>
							<div className='col-xs-12'>
								<h2><a href="http://00000000-0000-0000-0000-000000000000.com" target="_blank">00000000-0000-0000-0000-000000000000</a></h2>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-3 col-sm-4'>
								[[Photo]]
							</div>
							<div className='col-md-9 col-sm-8'>
								<h3 className="top"><a href="http://www.guidempty.com" target="_blank">guidempty.com</a></h3>
								<p>
									<a href="http://00000000-0000-0000-0000-000000000000.com/" target="_blank">00000000-0000-0000-0000-000000000000.com</a>,  
									also known as <a href="http://www.guidempty.com" target="_blank">guidempty.com</a> (but that domain name isn't as cool), 
									started out of the need to get an empty uniqueidentifier in SQL. 
									It's fairly simple in C#, but back in the days before <a href="http://dotnetfiddle.net" target="_blank">dotnetfiddle</a>, it was kind of a pain if 
									you didn't know where else in the database you could pull one. Once the site was up I added other text-based database tools to the site. Turn a list of items
									into a comma-separated quoted list (for a SQL in query), or convert a tab-delimited list (such as a spreadsheet) into a list of insert statements.
									These tools do all the computation entirely in your browser, so the data never hits a server. The input and output designed to allow data 
									to be easily copy and pasted to/from remote desktop sessions.
								</p>
							</div>
						</div>
						<div className='row'>
							<div className='col-xs-12'>
								<h2><a href="http://mylist.christmas" target="_blank">Christmas List</a></h2>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-3 col-sm-4'>
								[MYLIST.CHRISTMAS]
							</div>
							<div className='col-md-9 col-sm-8'>
								<h3 className="top"><a href="http://mylist.christmas" target="_blank">mylist.christmas</a></h3>
								<p>...</p>
							</div>
						</div>
					</div>
				</Body>
			</Page>
		);
	}
}

export default Posts;