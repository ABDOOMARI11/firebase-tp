// Ajouter le  code d'importaion pour l'initialisation

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';

// Ajouter le  code d'importaion pour l'authentification partie de s'inscrire
import { getAuth, createUserWithEmailAndPassword, updateProfile }from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';



//firebaseConfig les parametres de configuration


const firebaseConfig = {
    apiKey: "VOTRE_API_KEY",
    authDomain: "VOTRE_AUTH_DOMAIN",
    projectId: "VOTRE_PROJECT_ID",
    storageBucket: "VOTRE_STORAGE_BUCKET",
    messagingSenderId: "VOTRE_MESSAGING_SENDER_ID",
    appId: "VOTRE_APP_ID"
  };


// le code d'appelle de la fonction initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);


// le code d'appelle de la fonction getAuth();



// Ajouter le code  de la fonction signUpWithEmailAndPasswordFunction();





document.querySelector('.signUpForm').addEventListener('submit',
function(event) {

event.preventDefault();

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
// Appelle la fonction signUpWithEmailAndPassword
signUpWithEmailAndPassword(email, password);
});
  

