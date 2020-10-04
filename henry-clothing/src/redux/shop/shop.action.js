import {firestore, convertCollectionsSnapshotToMap} from "../../components/firebase/firebase.utils";


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

// export const fetchCollectionStartAcync = () => {
//     return dispatch => {
//     const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionStart())
//     collectionRef
//     .get()
//     .then(snapshot => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
//         dispatch(fetchCollectionSuccess(collectionsMap))
//     }).catch(error => {
//         dispatch(fetchCollectionFailure(error))
//     })   
// }
// }
