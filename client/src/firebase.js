// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-715da.firebaseapp.com",
  projectId: "mern-blog-715da",
  storageBucket: "mern-blog-715da.appspot.com",
  messagingSenderId: "781922519962",
  appId: "1:781922519962:web:b9942f133300d09f944823",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
