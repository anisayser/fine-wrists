// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5LoP0tGuOtH1G1ifYSdpsZud1TLkf1IQ",
    authDomain: "fine-wrists-70ad0.firebaseapp.com",
    projectId: "fine-wrists-70ad0",
    storageBucket: "fine-wrists-70ad0.appspot.com",
    messagingSenderId: "999531243447",
    appId: "1:999531243447:web:6cbe1b6369bdac8196aa32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;