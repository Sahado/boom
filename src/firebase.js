// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeSHNLh24-gcABo2X-Ras04C417s2ccYg",
  authDomain: "boom-c187c.firebaseapp.com",
  projectId: "boom-c187c",
  storageBucket: "boom-c187c.firebasestorage.app",
  messagingSenderId: "867390597985",
  appId: "1:867390597985:web:c0da625bd9d0ec8d063320",
  measurementId: "G-DYLD9XDKGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);