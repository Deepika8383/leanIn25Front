// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWmHg6ZeLiucRJl-BbsyZg6caXz7YLDc8",
  authDomain: "medisphere-24.firebaseapp.com",
  projectId: "medisphere-24",
  storageBucket: "medisphere-24.appspot.com",
  messagingSenderId: "44177846395",
  appId: "1:44177846395:web:c730a28c23ff5fb0bf72de",
  measurementId: "G-CRFR28D590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export Firebase Auth & Phone Authentication Functions
export { auth, RecaptchaVerifier, signInWithPhoneNumber };
