// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwjJqJEEBIGo5Oo72wrsnFdA-whTkUm-w",
  authDomain: "v-designer-f583c.firebaseapp.com",
  projectId: "v-designer-f583c",
  storageBucket: "v-designer-f583c.appspot.com",
  messagingSenderId: "31102472165",
  appId: "1:31102472165:web:01d36a4bf6e317eacd690c",
  measurementId: "G-4GZPRM5STE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};