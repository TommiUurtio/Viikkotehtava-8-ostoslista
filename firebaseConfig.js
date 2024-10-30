// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBIbbhfz6RxWKGN9xt9R4U63pulKG4DxE",
  authDomain: "shoppinglist-808dc.firebaseapp.com",
  projectId: "shoppinglist-808dc",
  storageBucket: "shoppinglist-808dc.appspot.com",
  messagingSenderId: "564371822205",
  appId: "1:564371822205:web:20aeb48fe35164c9a4c314",
  measurementId: "G-M03JEKYPSC" // Tämä voidaan jättää paikalleen, vaikka Analyticsia ei käytetä
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
