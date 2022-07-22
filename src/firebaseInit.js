// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBgRiUS7cOqqS7_ZY9P-J0OQplBS6YRDU",
    authDomain: "fine-wrists.firebaseapp.com",
    projectId: "fine-wrists",
    storageBucket: "fine-wrists.appspot.com",
    messagingSenderId: "184005969892",
    appId: "1:184005969892:web:2edc1c610126fb9874a9f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;