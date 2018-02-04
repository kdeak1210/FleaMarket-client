import constants from '../constants';

const initialState = {
  all: [
    {
      id: 1, key: 1, defaultAnimation: 2, label: 'Television', price: 100, position: { lat: 38.903, lng: -77.043 },
    },
    {
      id: 2, key: 2, defaultAnimation: 2, label: 'Couch', price: 250, position: { lat: 38.897, lng: -77.042 },
    },
    {
      id: 3, key: 3, defaultAnimation: 2, label: 'Playstation', price: 125, position: { lat: 38.897, lng: -77.035 },
    },
  ],
};

export default (state = initialState, action) => {
  const updated = { ...state };

  switch (action.type) {
    // case constants.ITEM_ADDED:

    // case constants.ITEMS_RECEIVED:
    //   console.log('Items Received');
    //   return updated;
    default:
      return updated;
  }
};
