import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './containers/App';

import Dashboard from './components/Dashboard';
import ManagePost from './containers/board/ManagePost';
import PostList from './containers/board/PostList';
import Category from './containers/board/Category';
import Tag from './containers/board/Tag';


export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/post/create/" component={ManagePost} />
      <Route path="/post/" component={PostList} />
      <Route path="/category/" component={Category} />
      <Route path="/tag/" component={Tag} />
      <Route path="/*" />
    </Route>
  </Router>
);
