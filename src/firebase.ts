// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqouZXgw8w8ZtqEPQHU90XgFlsd5L9_CI",
  authDomain: "zahintapadar-portfolio.firebaseapp.com",
  projectId: "zahintapadar-portfolio",
  storageBucket: "zahintapadar-portfolio.firebasestorage.app",
  messagingSenderId: "376679271214",
  appId: "1:376679271214:web:330cdc14325c9aacfc08bf",
  measurementId: "G-RGHK9JGQ98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);