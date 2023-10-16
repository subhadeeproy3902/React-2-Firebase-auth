// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKob-csgbhIJryhjR-eIIg-zYio-0nou4",
  authDomain: "email-auth-3902.firebaseapp.com",
  projectId: "email-auth-3902",
  storageBucket: "email-auth-3902.appspot.com",
  messagingSenderId: "1004422161441",
  appId: "1:1004422161441:web:3ef89b8b4e0de7296bef60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
