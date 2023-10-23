// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA0kViYMo8Blrqym7yHY6PN2rUKMZIC5g",
  authDomain: "fahm-e-quran.firebaseapp.com",
  projectId: "fahm-e-quran",
  storageBucket: "fahm-e-quran.appspot.com",
  messagingSenderId: "67626286652",
  appId: "1:67626286652:web:445b660a37fe1138000d39",
  measurementId: "G-FD1NH9MN24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Storage = getStorage(app);