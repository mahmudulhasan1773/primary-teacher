// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD63aFvWfamJllenvVm9zqxjwfbWJFwsnw",
  authDomain: "react-endgame.firebaseapp.com",
  projectId: "react-endgame",
  storageBucket: "react-endgame.appspot.com",
  messagingSenderId: "1040243918614",
  appId: "1:1040243918614:web:327d7ee9179eeb61a2f237",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
