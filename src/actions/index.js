import constants from '../constants';
import { APIManager } from '../utils';

const getRequest = (path, params, actionType) => dispatch =>
  APIManager.get(path, params)
    .then((response) => {
      // console.log(response);

      if (response.confirmation !== 'success') {
        throw new Error(response.message);
      }

      const payload = response.results || response.result || response.user;

      dispatch({
        type: actionType,
        payload,
        params,
      });

      return response;
    })
    .catch((err) => { throw err; });

const postRequest = (path, params, actionType) => dispatch =>
  APIManager.post(path, params)
    .then((response) => {
      // console.log(response);

      if (response.confirmation !== 'success') {
        throw new Error(response.message);
      }

      const payload = response.results || response.result || response.user;

      dispatch({
        type: actionType,
        payload,
        params,
      });

      return response;
    })
    .catch((err) => { throw err; });

export default {

  checkCurrentUser: params => dispatch =>
    dispatch(getRequest('/account/currentuser', params, constants.USER_LOGGED_IN)),

  login: params => dispatch =>
    dispatch(postRequest('/account/login', params, constants.USER_LOGGED_IN)),

  register: params => dispatch =>
    dispatch(postRequest('/account/register', params, constants.USER_LOGGED_IN)),

  // addItem: item => ({
  //   type: constants.ITEM_ADDED,
  //   payload: item,
  // }),

  addItem: params => dispatch =>
    dispatch(postRequest('/api/item', params, constants.ITEM_CREATED)),

  fetchItems: params => dispatch =>
    dispatch(getRequest('/api/item', params, constants.ITEMS_RECEIVED)),

  submitOrder: params => dispatch =>
    // Not passing in action type (send it and done, not tracking orders in store)
    dispatch(postRequest('/api/order', params, null)),

  sendEmail: params => dispatch =>
    dispatch(postRequest('/email/send', params, null)),

  locationChanged: location => ({
    type: constants.LOCATION_CHANGED,
    payload: location,
  }),

  logout: () => ({
    type: constants.USER_LOGGED_OUT,
  }),

};

