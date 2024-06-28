
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEtHtl3MwFY5zD9gz0uyoThNizL3angtk",
    authDomain: "national-coffee.firebaseapp.com",
    projectId: "national-coffee",
    storageBucket: "national-coffee.appspot.com",
    messagingSenderId: "456315665708",
    appId: "1:456315665708:web:878f44f926ad2e66004089"
};


const app = initializeApp(firebaseConfig);
export const datab = getFirestore(app);