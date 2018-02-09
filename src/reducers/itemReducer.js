import constants from '../constants';

const initialState = {
  all: null,
  // isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case constants.ITEMS_REQUESTED:
    //   console.log('ITEMS_REQUESTED');
    //   return { ...state, isFetching: true };

    case constants.ITEMS_RECEIVED:
      // console.log(`ITEMS_RECEIVED: ${JSON.stringify(action.payload)}`);
      return { ...state, all: [...action.payload] };

    case constants.ITEM_CREATED:
      // console.log(`ITEM CREATED: ${JSON.stringify(action.payload)}`);
      return { ...state, all: [action.payload, ...(state.all) || []] };

    case constants.ITEM_REMOVED:
      console.log(`ITEM_REMOVED: ${JSON.stringify(action.payload)}`);
      return {
        ...state,
        all: state.all.filter(item => item.id !== action.payload.id),
      };

    case constants.LOCATION_CHANGED:
      // console.log('LOCAITON_CHANGED: [wipe the list in store for requery]');
      return { ...state, all: null };

    default:
      return state;
  }
};
