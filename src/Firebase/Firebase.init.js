// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByAfB1wUHR4di2XqKMRNvj0ITiUQ2ady4",
  authDomain: "game-store-256c6.firebaseapp.com",
  projectId: "game-store-256c6",
  storageBucket: "game-store-256c6.firebasestorage.app",
  messagingSenderId: "521523212333",
  appId: "1:521523212333:web:fea376adc52101684b48a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);