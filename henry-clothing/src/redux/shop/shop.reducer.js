const INITIL_STATE = {
  collections: null,
  isFetching: false,
  isLoading: true,
  errorMessage: ''
};

const shopReducer = (state = INITIL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_COLLECTIONS_START':
      return{
        ...state,
        isFetching: true
      }
    case 'FETCH_COLLECTIONS_SUCCESS':
      return{
        ...state,
        collections: action.payload,
        isFetching: false,
        isLoading: false
      }
    case 'FETCH_COLLECTIONS_FAILURE':
      return{
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
