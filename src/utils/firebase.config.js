// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAqantoprKIs_kg0zX9-Yz3VcbaLs7UcSA",
  authDomain: "portfolio-a9ee8.firebaseapp.com",
  projectId: "portfolio-a9ee8",
  storageBucket: "portfolio-a9ee8.appspot.com",
  messagingSenderId: "206909678633",
  appId: "1:206909678633:web:d15016a303e9808276e838",
  measurementId: "G-RE34Y8NMVX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

