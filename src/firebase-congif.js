// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFJm_0Anfts_F-eU94SzU8AzGqxShXvbY",
  authDomain: "blog-platform-11aee.firebaseapp.com",
  projectId: "blog-platform-11aee",
  storageBucket: "blog-platform-11aee.appspot.com",
  messagingSenderId: "645531032899",
  appId: "1:645531032899:web:7988e38d463d6d740c63f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();