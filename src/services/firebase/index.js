// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqXjRj2-8dHV5CCvnISn9ojCI_B4KQBHM",
  authDomain: "backen31865.firebaseapp.com",
  projectId: "backen31865",
  storageBucket: "backen31865.appspot.com",
  messagingSenderId: "169307928124",
  appId: "1:169307928124:web:ee957471bb889250e17539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 

