import {takeLatest, call, put} from 'redux-saga/effects'
import {firestore, convertCollectionsSnapshotToMap} from '../../components/firebase/firebase.utils'
import {fetchCollectionSuccess, fetchCollectionFailure} from './shop.action'

const fetchCollectionStartAsync = function*(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));
        
    } catch(error){
        yield put(fetchCollectionFailure(error));
    }
     
       
    
}

export function* fetchCollectionStart(){
    yield takeLatest('FETCH_COLLECTIONS_START',fetchCollectionStartAsync)
}
