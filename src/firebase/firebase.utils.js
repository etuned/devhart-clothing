import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBIhY5nXYfxl4OdXSXeSy5TBUlm97D_Ksg",
    authDomain: "devhart-db.firebaseapp.com",
    databaseURL: "https://devhart-db.firebaseio.com",
    projectId: "devhart-db",
    storageBucket: "",
    messagingSenderId: "299110686931",
    appId: "1:299110686931:web:1887cadf33a419308eb426",
    measurementId: "G-9Z51Q4FKMM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select=account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;