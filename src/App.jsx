import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom'

import Home from './components/routes/Home.jsx';
import Post from './components/routes/Post.jsx';
import Posts from './components/routes/Posts.jsx';
import Projects from './components/routes/Projects.jsx';
import About from './components/routes/About.jsx';
require("stylesheets/base");

const PostRouter = () => (
	<Switch>
		<Route exact path="/posts" component={Posts} />
		<Route path="/posts/:id" component={Post} />
	</Switch>
)

let App = React.createClass({
	render() {
		return (<div className='wrapper'>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/posts" component={PostRouter} />
				<Route path="/projects" component={Projects} />
				<Route path="/about" component={About} />
			</Switch>
		</div>);
	}
});

ReactDOM.render((
	<HashRouter>
		<App />
	</HashRouter>
), document.body);