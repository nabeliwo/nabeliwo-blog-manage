import React from 'react';
import { Router, Route } from 'react-router';
import App from './containers/App';

import ManagePost from './containers/board/ManagePost';
//import Dashboard from './components/manage/Dashboard';
//import PostList from './components/manage/PostList';


export default (
  <Router>
    <Route path="/" component={App}>
      <Route path="/post/create/" component={ManagePost} />
      <Route path="/*" />
    </Route>
  </Router>
);

//export default (
//  <Router>
//    <Route path="/" component={App}>
//      <Route path="/post/" component={PostList} />
//      <Route path="/*" />
//    </Route>
//  </Router>
//);

