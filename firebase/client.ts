// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARGNkyOat23-rDjXQMH-STzOixkWBI6tM",
  authDomain: "next-demo-dev.firebaseapp.com",
  projectId: "next-demo-dev",
  storageBucket: "next-demo-dev.appspot.com",
  messagingSenderId: "678833768467",
  appId: "1:678833768467:web:c260e5f37e7cc5416a57e6",
  measurementId: "G-T6TVHG3V73",
};

if (!getApps()?.length) {
  initializeApp(firebaseConfig);
}

export const db = getFirestore();
export const storage = getStorage();
export const fucntion = getFunctions();
export const auth = getAuth();
