// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPjPNwN7e2e2-W2_nxQ-CAX4eSp_xBAsg",
  authDomain: "resume-builder-dad7c.firebaseapp.com",
  projectId: "resume-builder-dad7c",
  storageBucket: "resume-builder-dad7c.appspot.com",
  messagingSenderId: "582048354662",
  appId: "1:582048354662:web:190f4e6adadee2ed59b8a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
