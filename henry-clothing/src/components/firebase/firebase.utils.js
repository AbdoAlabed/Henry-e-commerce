import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCi5fIpp8gsJw42TN0LDw1IxLw9kC-hl18",
  authDomain: "clothing-store-f7cfc.firebaseapp.com",
  databaseURL: "https://clothing-store-f7cfc.firebaseio.com",
  projectId: "clothing-store-f7cfc",
  storageBucket: "clothing-store-f7cfc.appspot.com",
  messagingSenderId: "490873496471",
  appId: "1:490873496471:web:5ceb89b6c46ee0f84f9ad2",
  measurementId: "G-8FF6X0W2QW",
};

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user.userAuth) return;

  const userRef = firestore.doc(`users/${user.userAuth.uid}`);
  const snapShot = await userRef.get();
   console.log(snapShot)
  if (!snapShot.exists) {
    const { email } = user.userAuth;
    const {displayName} = user
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });

 return await batch.commit() 
}

export const getCurrentUser = () => {
  return new Promise((resolve,reject)=>{
    const unsubscrib = auth.onAuthStateChanged(userAuth => {
      unsubscrib()
      resolve(userAuth)
    },reject)
  })
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();
    return{
      routName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accu,collection) => {
   accu[collection.title.toLowerCase()] = collection;
    return accu;
  },{})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
