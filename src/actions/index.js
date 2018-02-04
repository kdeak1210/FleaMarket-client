import constants from '../constants';

export default {

  addItem: item => ({
    type: constants.ITEM_ADDED,
    payload: item,
  }),

};

