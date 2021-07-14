import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCTR6oZlDyEQBkSQd9DxXkDgNfogzjYF44",
  authDomain: "linkedin-clone-48f81.firebaseapp.com",
  projectId: "linkedin-clone-48f81",
  storageBucket: "linkedin-clone-48f81.appspot.com",
  messagingSenderId: "250678728920",
  appId: "1:250678728920:web:37e4bb6fe6233a6dde1fad",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
