import SHOP_DATA from "./shop_data";

const INITIL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_COLLECTION':
       return{
         ...state,
         collections: action.payload
       }
    default:
      return state;
  }
};

export default shopReducer;
