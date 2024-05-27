// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // <- needed for DB

import { getAuth } from "firebase/auth"; // <- needed for auth (later)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBqxMWsyK5ysK-sKGqKMqpfPRw2wCrSLg",
  authDomain: "remedy-964f6.firebaseapp.com",
  projectId: "remedy-964f6",
  storageBucket: "remedy-964f6.appspot.com",
  messagingSenderId: "748143205763",
  appId: "1:748143205763:web:cc40bc3306a4414016aab6"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app); // <- needed for auth (later)
 export { auth }

export const db = getFirestore(app); // <- needed for DB so we can use it in our application components