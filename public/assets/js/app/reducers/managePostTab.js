import { CHANGE_MANAGE_POST_TAB, TOGGLE_MANAGE_POST_TAB_VISIBLE } from '../constants/ActionTypes';

const initialState = {
  isVisible: true,
  current: 'option',
  tabs: [
    'option',
    'category',
    'tag',
    'image'
  ]
};

export default function managePostTab(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MANAGE_POST_TAB:
      return Object.assign({}, state, {
        current: action.current
      });

    case TOGGLE_MANAGE_POST_TAB_VISIBLE:
      return Object.assign({}, state, {
        isVisible: !state.isVisible
      });

    default:
      return state;
  }
}
