export const fetchCollectionStart = () =>{
    return {
        type: 'FETCH_COLLECTIONS_START',
    }
}

export const fetchCollectionSuccess = (collection) => {
    return{
        type: 'FETCH_COLLECTIONS_SUCCESS',
        payload: collection
    }
}

export const fetchCollectionFailure = (error) => {
    return{
        type: 'FETCH_COLLECTIONS_FAILURE',
        payload: error.message
    }
}

