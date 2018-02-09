import constants from '../constants';

const initialState = {
  currentLocation: {
    // Start the map out in DC
    lat: 38.90, lng: -77.04,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.LOCATION_CHANGED:
      // console.log(`LOCATION CHANGED: ${JSON.stringify(action.payload)}`);
      return { ...state, currentLocation: action.payload };

    default:
      return state;
  }
};

