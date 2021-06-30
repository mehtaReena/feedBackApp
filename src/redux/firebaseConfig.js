import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxfX3J9iwwExnbcrbJWbwX9rWORlMGTyk",
    authDomain: "feedback-b5f5a.firebaseapp.com",
    databaseURL: "https://feedback-b5f5a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "feedback-b5f5a",
    storageBucket: "feedback-b5f5a.appspot.com",
    messagingSenderId: "86512680034",
    appId: "1:86512680034:web:ef1d3b1acb345b3c4d253b",
    measurementId: "G-694QN1VFB6"
  };
  const app = firebase.initializeApp(firebaseConfig);
export default app;