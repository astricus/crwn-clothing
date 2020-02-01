import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAUeLHovKFc5l0DEVNl1pJiKHC8c5d_ceI",
    authDomain: "crwn-db-b6516.firebaseapp.com",
    databaseURL: "https://crwn-db-b6516.firebaseio.com",
    projectId: "crwn-db-b6516",
    storageBucket: "crwn-db-b6516.appspot.com",
    messagingSenderId: "520608115906",
    appId: "1:520608115906:web:15464bb9b8297604ac5f5b",
    measurementId: "G-3LM1K8NQR7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;