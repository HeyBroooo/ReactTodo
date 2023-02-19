// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwVf4YjTBbfH1qEZ1xBnyHKhbZxfUr-tE",
  authDomain: "todofb-e65a3.firebaseapp.com",
  projectId: "todofb-e65a3",
  storageBucket: "todofb-e65a3.appspot.com",
  messagingSenderId: "3048146651",
  appId: "1:3048146651:web:67444ebe916bcb97c5eefe",
  measurementId: "G-30DV7K0FLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
