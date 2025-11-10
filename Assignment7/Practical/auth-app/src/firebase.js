import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGtg1Saaw8SBGM5zNQxEbscu4FXfJkJRo",
  authDomain: "login-auth-ad54d.firebaseapp.com",
  projectId: "login-auth-ad54d",
  storageBucket: "login-auth-ad54d.firebasestorage.app",
  messagingSenderId: "237338906401",
  appId: "1:237338906401:web:c023012f5165dc98263860",
  measurementId: "G-9FQV9Q2TCW"
};

const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// firestore
export const db = getFirestore(app);

export default app;
