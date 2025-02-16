import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Firebase configuratie
const firebaseConfig = {
    apiKey: "AIzaSyAx4cl9rzfixEODH6bSSeyukLE0kuYy6ws",
    authDomain: "jama-ah-app.firebaseapp.com",
    projectId: "jama-ah-app",
    storageBucket: "jama-ah-app.firebasestorage.app",
    messagingSenderId: "714382461723",
    appId: "1:714382461723:web:2f0c4d9cdc6aa742aee1be",
    measurementId: "G-JQSD558BKN"
};

// Firebase initialisatie (moet boven de auth komen)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Pass 'app' naar getAuth
const provider = new GoogleAuthProvider();

// Google login knop
document.getElementById("google-login").addEventListener("click", function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("Ingelogd als:", user.displayName, user.email);
            localStorage.setItem('userName', user.displayName);
            window.location.href = "gebruikerkiezen.html"; // Verander dit naar je eigen pagina
            
        })
        .catch((error) => {
            console.error("Login mislukt:", error.message);
        });
});

const applogin = initializeApp(firebaseConfig);
const authlogin = getAuth(app); // Pass 'app' naar getAuth
const providerlogin = new EAuthProvider();


