import constants from '../constants';

const initialState = {
  all: [
    {
      id: 1, name: 'Television', price: 100, image: 'https://i.amz.mshcdn.com/e9PM6xWVAGxA408GPLIBPTXaMV0=/http%3A%2F%2Fa.amz.mshcdn.com%2Fwp-content%2Fuploads%2F2015%2F01%2FBigTV.jpg', position: { lat: 38.903, lng: -77.043 }, seller: { username: 'kyle', image: 'http://ww3.hdnux.com/photos/71/12/20/14984254/5/920x920.jpg' },
    },
    {
      id: 2, name: 'Couch', price: 250, image: 'https://www.ritdye.com/wp-content/uploads/2015/11/3qss2j7wxpgg_couch-400x400.jpg', position: { lat: 38.897, lng: -77.042 }, seller: { username: 'tbrady', image: 'http://ww3.hdnux.com/photos/71/12/20/14984254/5/920x920.jpg' },
    },
    {
      id: 3, name: 'Lawn Mower', price: 125, image: 'http://www.mowersandspares.co.uk/img/category/cropped/petrol_mower.jpg', position: { lat: 38.897, lng: -77.035 }, seller: { username: 'dtrump', image: 'http://ww3.hdnux.com/photos/71/12/20/14984254/5/920x920.jpg' },
    },
  ],
};

export default (state = initialState, action) => {
  const updated = { ...state };

  switch (action.type) {
    case constants.ITEM_ADDED:
      console.log(`ITEM_ADDED: ${JSON.stringify(action.payload)}`);
      return { ...state, all: [...state.all, action.payload] };

    // case constants.ITEMS_RECEIVED:
    //   console.log('Items Received');
    //   return updated;
    default:
      return updated;
  }
};
