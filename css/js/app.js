// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = { apiKey: "AIzaSyDIfQf2x9l3mwdaKjkMLGnJ0r7RN3SI3go", authDomain: "pikzels-app.firebaseapp.com", projectId: "pikzels-app",storageBucket:"pikzels-app.firebasestorage.app",
 messagingSenderId: "366491935536", appId:1:366491935536:web:649a6755468d3e57205ef5",measurementId: "G-LR0MSJLVEE"
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase connected successfully!");
