import * as types from '../constants/ActionTypes';
import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

import pages from './pages';
import menuVisible from './menuVisible';
import managePostTab from './managePostTab';
import posts from './posts';


const rootReducer = combineReducers({
  pages,
  menuVisible,
  managePostTab,
  posts,
  router
});

export default rootReducer;
