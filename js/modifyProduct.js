// Ajouter le  code d'importaion pour l'initialisation
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';


// Ajouter le  code d'importaion pour cloud firestore
import { getFirestore, doc, getDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js';


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





async function populateForm() {
    try {
      const productId = localStorage.getItem("productId");
      if (!productId) {
        console.error("Product ID not found!");
        return;
      }
      const productDoc = await getDoc(doc(db, "products", productId));
      if (productDoc.exists()) {
        const productData = productDoc.data();
        document.getElementById("category").value = productData.category;
        document.getElementById("description").value = productData.description;
        document.getElementById("category").readOnly = false;
        document.getElementById("description").readOnly = false;
        document.getElementById("image").disabled = false;
        document.getElementById("editButton").style.display = "none";
        document.getElementById("saveButton").style.display = "block";
      } else {
        console.error("Product document not found!");
      }
    } catch (error) {
      console.error("Error populating form:", error);
    }
  }


  //Ajouter le code de la fonction saveChanges()











  // Appeler la fonction pour preremplir le formulaire
window.addEventListener('load', populateForm);
// Ecouter l'evenement de clic sur le button
document.getElementById('saveButton').addEventListener('click',saveChanges);