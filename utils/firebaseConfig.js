import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2FBw-LdwEIQ6df6ysJ8yhPo3G9dBxRRQ",
  authDomain: "insta-database-d9202.firebaseapp.com",
  projectId: "insta-database-d9202",
  storageBucket: "insta-database-d9202.appspot.com",
  messagingSenderId: "103917434397",
  appId: "1:103917434397:web:73db9fe974204a74d3f8f4",
  measurementId: "G-M1Z4VCQNRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//const auth = getAuth(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase


// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
// Import the functions you need from the SDKs you need