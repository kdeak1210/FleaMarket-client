import constants from '../constants';

const initialState = {
  currentUser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_LOGGED_IN:
      console.log('USER_LOGGED_IN', action.payload);
      return { ...state, currentUser: action.payload };

    case constants.USER_LOGGED_OUT:
      console.log('USER_LOGGED_OUT');
      return { ...state, currentUser: null };

    default:
      return state;
  }
};
