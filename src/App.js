import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Posts, NoMatch, NewPost, Post } from './pages';
import Menu from './components/Menu';

import '../src/styles/style.css';

export default class App extends Component {
  render() {
    return (
        <div className="App container">
          <Menu />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/posts/new" component={NewPost}/>
            <Route path="/posts/:id" component={Post}/>
            <Route path="/posts" component={Posts}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
    );
}
}