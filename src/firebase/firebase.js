// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpXanmK4C49YzgCVppqsUyyGrf9kC-KB0",
  authDomain: "net-ninjas-tutorial-8a283.firebaseapp.com",
  projectId: "net-ninjas-tutorial-8a283",
  appId: "1:386108328911:web:2ca00b40947832f3ad20ba",
  measurementId: "G-G9V03E926X"
};


// Initialize core Firebase app
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Only load core features you want
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
