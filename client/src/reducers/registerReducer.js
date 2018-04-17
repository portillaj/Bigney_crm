import { REGISTER_USER } from '../actions/types';

export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
