import { ADD_USER, DELETE_USER, FETCH_USER, PUT_USER, FETCH_USER_ID } from '../actions/types';

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case DELETE_USER:
      return action.payload.id;
    case FETCH_USER:
      return action.payload;
    case PUT_USER:
      return action.payload;
    case FETCH_USER_ID:
      return action.payload;
    default:
      return state;
  }
}