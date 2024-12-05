// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSfpcKChezdmj5zZR9GNk5zpDHUYW294A",
  authDomain: "test-c3663.firebaseapp.com",
  projectId: "test-c3663",
  storageBucket: "test-c3663.firebasestorage.app",
  messagingSenderId: "690865326961",
  appId: "1:690865326961:web:545af2e2acc052551604d0",
  measurementId: "G-T7TT14V57Y",
  databaseURL: "https://react-fire-bace-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
