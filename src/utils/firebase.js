// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4qKgx7atLY_PYZwOId8QL8MJFNEWfLKk",
  authDomain: "netflixgpt-73256.firebaseapp.com",
  projectId: "netflixgpt-73256",
  storageBucket: "netflixgpt-73256.firebasestorage.app",
  messagingSenderId: "430020863002",
  appId: "1:430020863002:web:53d15d10ba0a3a30889da3",
  measurementId: "G-1JEHMBTP48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();