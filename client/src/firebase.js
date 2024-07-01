// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "registration-form-mern.firebaseapp.com",
  projectId: "registration-form-mern",
  storageBucket: "registration-form-mern.appspot.com",
  messagingSenderId: "536344818369",
  appId: "1:536344818369:web:a33d97d62455caa2b35a40",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
