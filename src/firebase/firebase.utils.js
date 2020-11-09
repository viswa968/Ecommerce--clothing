import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCtrtHR3ZDiJ-LabU3eVtncvk7COIQXGgI",
    authDomain: "crwn-db-b73b0.firebaseapp.com",
    databaseURL: "https://crwn-db-b73b0.firebaseio.com",
    projectId: "crwn-db-b73b0",
    storageBucket: "crwn-db-b73b0.appspot.com",
    messagingSenderId: "1015958698139",
    appId: "1:1015958698139:web:5b425080cda2334eaa2e3e",
    measurementId: "G-CP6VDDGK4R"
  }

  firebase.initializeApp(config);

  // auth we have exported abov in the import library
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

// Setting up google authentication utility.

const provider =new firebase.auth.GoogleAuthProvider();
// propmpts user to select a google account.
provider.setCustomParameters({ prompt: 'select_account'})
// this will enable to sign in the user with the google pop up.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;