// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzLbLju6ODYAmV80Uz3m84GTG7Rq3uyP8",
    authDomain: "la-tiendita-219d4.firebaseapp.com",
    projectId: "la-tiendita-219d4",
    storageBucket: "la-tiendita-219d4.appspot.com",
    messagingSenderId: "715231577016",
    appId: "1:715231577016:web:1c37f13584e7b4fbca054d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;