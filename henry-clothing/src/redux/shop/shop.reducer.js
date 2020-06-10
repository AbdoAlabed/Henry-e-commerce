import SHOP_DATA from "./shop_data";

const INITIL_STATE = SHOP_DATA;

const shopReducer = (state = INITIL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
