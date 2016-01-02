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
