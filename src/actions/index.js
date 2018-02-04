import constants from '../constants';

export default {

  addItem: item => ({
    type: constants.ITEM_ADDED,
    payload: item,
  }),

  locationChanged: location => ({
    type: constants.LOCATION_CHANGED,
    payload: location,
  }),

};

