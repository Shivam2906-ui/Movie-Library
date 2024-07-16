// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC4cLXm4CNRrHf56cs1kfRv5VMFVtJhPk",
  authDomain: "movie-library-2ae4d.firebaseapp.com",
  projectId: "movie-library-2ae4d",
  storageBucket: "movie-library-2ae4d.appspot.com",
  messagingSenderId: "852180287453",
  appId: "1:852180287453:web:79f7f9ac9dde777d9c4034",
  measurementId: "G-9JZSZFP77S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const auth = getAuth();
