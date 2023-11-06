// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAEuzc2AXk3ci1L3VQP962GDhArv1djBxE",
  authDomain: "bayem-f37ef.firebaseapp.com",
  projectId: "bayem-f37ef",
  storageBucket: "bayem-f37ef.appspot.com",
  messagingSenderId: "890757458686",
  appId: "1:890757458686:web:d72a791f30267ddf9393af",
  measurementId: "G-WEX1QHB34S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// export const db = getFirestore(app);