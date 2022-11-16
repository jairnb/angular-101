// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPw0yk8uEVEUkQ3_G5zKUr39wTzHvmCkg",
  authDomain: "angular101-7246d.firebaseapp.com",
  projectId: "angular101-7246d",
  storageBucket: "angular101-7246d.appspot.com",
  messagingSenderId: "383193013678",
  appId: "1:383193013678:web:215d21b7ef8f21db88bc3f",
  measurementId: "G-9V1EZ3S4X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);