import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8riGNs77YToGb0M2-c_bYkH4bIIVp-aU",
  authDomain: "ecommerce-app-bee06.firebaseapp.com",
  projectId: "ecommerce-app-bee06",
  storageBucket: "ecommerce-app-bee06.appspot.com",
  messagingSenderId: "465636612095",
  appId: "1:465636612095:web:6a138f35682a1d0c0379ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
