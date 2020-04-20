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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
