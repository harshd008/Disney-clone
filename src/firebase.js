import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC8a5PQGgUzKuZ8TGfWCJjloKv2PKN43ok",
    authDomain: "disneyplus-clone-849ca.firebaseapp.com",
    projectId: "disneyplus-clone-849ca",
    storageBucket: "disneyplus-clone-849ca.appspot.com",
    messagingSenderId: "602028007562",
    appId: "1:602028007562:web:5f4bd6f912a0dcf2ad8d73",
    measurementId: "G-BJ979ZKVKK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();;

export { auth, provider, storage };
export default db;