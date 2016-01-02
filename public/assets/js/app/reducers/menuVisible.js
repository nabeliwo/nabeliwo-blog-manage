import { TOGGLE_MENU_VISIBLE } from '../constants/ActionTypes';

export default function menuVisible(state = false, action) {
  switch (action.type) {
    case TOGGLE_MENU_VISIBLE:
      return !state;

    default:
      return state;
  }
}
