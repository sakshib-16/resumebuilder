// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmXDv3PhPsa3EeKw-Rh-ab6B0vYuTcQyg",
  authDomain: "helium-74bd3.firebaseapp.com",
  databaseURL: "https://helium-74bd3.firebaseio.com",
  projectId: "helium-74bd3",
  storageBucket: "helium-74bd3.appspot.com",
  messagingSenderId: "288845870471",
  appId: "1:288845870471:web:4c24d7e3da60ed2d920f22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);