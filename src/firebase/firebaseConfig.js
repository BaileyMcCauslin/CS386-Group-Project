// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

//Firebase API config
const firebaseConfig = {
  apiKey: "AIzaSyDTH0HVxvdrhDp51RSGL7P2jYxdRFBUJzQ",
  authDomain: "cs286-f38d8.firebaseapp.com",
  projectId: "cs286-f38d8",
  storageBucket: "cs286-f38d8.appspot.com",
  messagingSenderId: "654374174598",
  appId: "1:654374174598:web:956234c5e1a94f2a783607",
  measurementId: "G-BKD8K4BNDV"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig  );
const auth = getAuth( app );
const analytics = getAnalytics( app );

export default { app, auth };