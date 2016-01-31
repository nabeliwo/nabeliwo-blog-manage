import axios from 'axios';
import * as types from '../constants/ActionTypes';

export function toggleMenuVisible() {
  return { type: types.TOGGLE_MENU_VISIBLE };
}

export function changeManagePostTab(current) {
  return {
    type: types.CHANGE_MANAGE_POST_TAB,
    current
  };
}

export function toggleManagePostTabVisible() {
  return { type: types.TOGGLE_MANAGE_POST_TAB_VISIBLE };
}


function requestData() {
  return { type: types.REQUEST_DATA };
}

function receiveData(json) {
  return {
    type: types.RECIEVE_DATA,
    data: json
  };
}

function receiveError(json) {
  return {
    type: types.RECEIVE_ERROR,
    data: json
  };
}

function receiveSuccess(json) {
  return {
    type: types.RECEIVE_SUCCESS,
    data: json
  };
}
//
// export function fetchData(url) {
//   return dispatch => {
//     dispatch(requestData());
//
//     return axios({
//       url,
//       timeout: 20000,
//       method: 'get',
//       responseType: 'json'
//     })
//     .then(res => {
//       dispatch(receiveData(res.data));
//     })
//     .catch(res => {
//       dispatch(receiveError(res.data));
//       //dispatch(pushState(null, '/error'));
//     });
//   };
// }

function addPost(json) {
  return {
    type: types.POST_DATA,
    data: json
  };
}

export function postData(url, post) {
  return dispatch => {
    dispatch(addPost(post));

    return axios({
      url,
      timeout: 20000,
      method: 'post',
      data: post
    })
    .then(res => {
      dispatch(receiveSuccess(res.data));
      console.log('post success');
      console.log(res.data);
    })
    .catch(res => {
      dispatch(receiveError(res.data));
      console.log('error');
    });
  };
}
