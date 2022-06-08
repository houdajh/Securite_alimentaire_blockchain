import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import * as firebase from "firebase";

const firebaseConfig =( {
    apiKey: "AIzaSyCTAg1NupLT5ah8nlmv7oVoAXpnlOjyglo",
    authDomain: "projs4.firebaseapp.com",
    databaseURL: "https://projs4-default-rtdb.firebaseio.com",
    projectId: "projs4",
    storageBucket: "projs4.appspot.com",
    messagingSenderId: "60579736031",
    appId: "1:60579736031:web:1d08def323c9b6a5d9fc6a",
    measurementId: "G-2268Z7XHB2"
  });

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = getFirestore(firebase);

export const db = firebase.firestore();
export default db;