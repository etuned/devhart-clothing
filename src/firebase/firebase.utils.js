import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBIhY5nXYfxl4OdXSXeSy5TBUlm97D_Ksg",
  authDomain: "devhart-db.firebaseapp.com",
  databaseURL: "https://devhart-db.firebaseio.com",
  projectId: "devhart-db",
  storageBucket: "devhart-db.appspot.com",
  messagingSenderId: "299110686931",
  appId: "1:299110686931:web:54dc312e19269bed8eb426",
  measurementId: "G-SK741T1P6D"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
