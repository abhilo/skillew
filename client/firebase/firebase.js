// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoqdP3CXvccd2PHkpRVsd4L7yVO_nBOZY",
  authDomain: "skillew-532fd.firebaseapp.com",
  projectId: "skillew-532fd",
  storageBucket: "skillew-532fd.appspot.com",
  messagingSenderId: "699556162835",
  appId: "1:699556162835:web:eef521c7d393c61620bee6",
  measurementId: "G-K7WN9SZDZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
