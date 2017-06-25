import React from 'react';
import { Router, Link, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './components/routes/Home.jsx';
import Post from './components/routes/Post.jsx';
import Posts from './components/routes/Posts.jsx';
import Projects from './components/routes/Projects.jsx';
import About from './components/routes/About.jsx';
require("stylesheets/base");

let App = React.createClass({
	render() {
		return (<div className='wrapper'>{this.props.children}</div>);
	}
});

React.render((
	<Router>
		<Route name="app" path="/" component={App}>
			<IndexRoute component={Home} />
			<Route name="posts" path="posts">
				<IndexRoute component={Posts} />
				<Route path=":id" component={Post} />
			</Route>
			<Route name="projects" path="projects" component={Projects} />
			<Route name="about" path="about" component={About} />
		</Route>
	</Router>
), document.body);