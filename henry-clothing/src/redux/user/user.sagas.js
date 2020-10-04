import {takeLatest, put, call, all} from 'redux-saga/effects'
import {googleProvider,auth, createUserProfileDocument} from '../../components/firebase/firebase.utils'
import {googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure} from './user.action'

 function* signInWithGoogle(){
   try{
    const {user} = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDocument,user)
    const snapShot = yield userRef.get();
        yield put(googleSignInSuccess({id: snapShot.id, ...snapShot.data()}))
   } catch(error){
     yield put(googleSignInFailure(error.message))
   }
}

export function* signInWithEmailAndPassword({payload: {email, password}}){
    try{
       const {user} = yield auth.signInWithEmailAndPassword(email, password)
       const userRef = yield call(createUserProfileDocument,user)
       const snapShot = yield userRef.get();
           yield put(emailSignInSuccess({id: snapShot.id, ...snapShot.data()}))
    } catch(error){
        yield put(emailSignInFailure(error.message))
    }
}

export  function* onSignInWithGoogleStart(){
    yield takeLatest("GOOGLE_SIGN_IN_START", signInWithGoogle)
}

export function* onSignInWithEmailAndPasswordStart(){
    yield takeLatest("EMAIL_SIGN_IN_START",signInWithEmailAndPassword)
}

export function* userSagas(){
    yield all([call(onSignInWithGoogleStart),call(onSignInWithEmailAndPasswordStart)])
}