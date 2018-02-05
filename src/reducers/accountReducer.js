import constants from '../constants';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_LOGGED_IN:
      console.log('USER_LOGGED_IN', action.payload);
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
