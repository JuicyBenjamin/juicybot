// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7u94sKuwPEFLZHhGQ85LpabkCEUYZKb0",
  authDomain: "copypasta-api-252f8.firebaseapp.com",
  databaseURL:
    "https://copypasta-api-252f8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "copypasta-api-252f8",
  storageBucket: "copypasta-api-252f8.appspot.com",
  messagingSenderId: "402902746064",
  appId: "1:402902746064:web:66190078a0aa1530006fd5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);

export default database;
