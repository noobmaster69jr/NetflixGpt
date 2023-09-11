// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl4pGcu13dAYDryRZZQN9WT5Kc1YxM2Dw",
  authDomain: "netflixgpt-2bbf1.firebaseapp.com",
  projectId: "netflixgpt-2bbf1",
  storageBucket: "netflixgpt-2bbf1.appspot.com",
  messagingSenderId: "415079093273",
  appId: "1:415079093273:web:3c3acbb2267ebea1508688",
  measurementId: "G-E0L0G2F99B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
