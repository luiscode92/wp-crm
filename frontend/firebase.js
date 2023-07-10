// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjX3gBhK8fWbB3BN9bYr43Um_9szMx98w",
  authDomain: "crm-57e82.firebaseapp.com",
  projectId: "crm-57e82",
  storageBucket: "crm-57e82.appspot.com",
  messagingSenderId: "956858410948",
  appId: "1:956858410948:web:0b8eb33b8cce6ebd11e691",
  measurementId: "G-HG1SF2772Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);