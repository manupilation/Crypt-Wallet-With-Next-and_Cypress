// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_DATA } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_DATA:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  default:
    return state;
  }
};

export default user;
