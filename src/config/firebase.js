import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCfepKe-dpDWjRmd6hh9y1q59eV1ukkuFs",
  authDomain: "fertility-app-e96b2.firebaseapp.com",
  projectId: "fertility-app-e96b2",
  storageBucket: "fertility-app-e96b2.appspot.com",
  messagingSenderId: "262155748610",
  appId: "1:262155748610:web:e4afff09f1dc1405c7ee1b",
  measurementId: "G-41SGN70MW4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
