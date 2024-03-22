// Ajouter le  code d'importaion pour l'initialisation
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';

//Ajouter le  code d'importaion pour L'authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';


// Ajouter le  code d'importaion pour cloud firestore

import { getFirestore, collection, addDoc, serverTimestamp, setDoc } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js';

// Ajouter le  code d'importaion pour cloud storage

import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-storage.js';



//firebaseConfig les parametres de configuration(remplacer les par votre propres parametres)
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



// le code d'appelle de la fonction getFirestore();
// le code d'appelle de la fonction getStorage();
// le code d'appelle de la fonction getAuth();




//la fonction saveProduct()











// ecouter la soumission du formulaire
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;
    const imageFile = document.getElementById("image").files[0];
    if (imageFile) {
      saveProduct(category, description, imageFile);
    } else {
      console.error("No image selected!");
    }
  });



