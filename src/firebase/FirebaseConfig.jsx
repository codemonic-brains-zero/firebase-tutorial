// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "fir-auth-d2491.firebaseapp.com",
    projectId: "fir-auth-d2491",
    storageBucket: "fir-auth-d2491.appspot.com",
    messagingSenderId: "636034672949",
    appId: "1:636034672949:web:3f66b69cd7f4631b13847c",
    measurementId: "G-DGBPBLRVS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const fireDB = getFirestore(app);