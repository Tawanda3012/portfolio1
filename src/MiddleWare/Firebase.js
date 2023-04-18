// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgOU6IteHg3_JhIgMNeKklooas1Lyibvo",
  authDomain: "potfolio-eaebe.firebaseapp.com",
  projectId: "potfolio-eaebe",
  storageBucket: "potfolio-eaebe.appspot.com",
  messagingSenderId: "857296979523",
  appId: "1:857296979523:web:ece9d87f0bd747765cf6f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  {app}