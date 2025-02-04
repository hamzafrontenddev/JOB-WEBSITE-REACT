// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5CSAbyTNnyDFwMLz7RZNk2fUQNGrh0iI",
  authDomain: "job-website-online.firebaseapp.com",
  projectId: "job-website-online",
  storageBucket: "job-website-online.firebasestorage.app",
  messagingSenderId: "30006664815",
  appId: "1:30006664815:web:a292da54dd1860271eb79a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);