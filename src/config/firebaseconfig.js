// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPS_sTlMvFKbZhvwu33yBjPOm7vAu_w8Q",
    authDomain: "hotel-management-app-123.firebaseapp.com",
    projectId: "hotel-management-app-123",
    storageBucket: "hotel-management-app-123.appspot.com",
    messagingSenderId: "414243351153",
    appId: "1:414243351153:web:d20eb0783c45ffb808c9d0",
    measurementId: "G-H2WGKHL1XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;