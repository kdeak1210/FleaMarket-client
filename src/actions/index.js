import constants from '../constants';

export default {

  fetchComments: () => ({
    type: constants.ITEMS_RECEIVED,
    payload: ['item1', 'item2'],
  }),

};

