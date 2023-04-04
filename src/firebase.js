import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyCGDxJKOZiSTq0ZkQlBlRdMADPyCaNrgFg",
    authDomain: "clone-3431d.firebaseapp.com",
    projectId: "clone-3431d",
    storageBucket: "clone-3431d.appspot.com",
    messagingSenderId: "920178959293",
    appId: "1:920178959293:web:59dfeb568a9cbe9740e8d4",
    measurementId: "G-KMLSXWQMRB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth= firebase.auth()

  export {db, auth}