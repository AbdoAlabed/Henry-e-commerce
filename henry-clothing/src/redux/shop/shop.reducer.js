
const INITIL_STATE = {
  collections: null
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
