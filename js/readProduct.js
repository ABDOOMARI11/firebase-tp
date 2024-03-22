// Ajouter le  code d'importaion pour l'initialisation
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';

// Ajouter le  code d'importaion pour cloud firestore
import { getFirestore, doc, getDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js';


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




// Fonction pour afficher les détails du produit
async function displayProductDetails() {
  try {
    const productId = localStorage.getItem("productId");
    if (!productId) {
      console.error("Product ID not found!");
      return;
    }

    const productDoc = await getDoc(doc(db, "products", productId));
    if (productDoc.exists()) {
      const productData = productDoc.data();
      document.getElementById("productImage").src = productData.imageUrl;
      document.getElementById("productCategory").textContent =
        productData.category;
      document.getElementById("productDescription").textContent =
        productData.description;

      // Écouter le clic sur le bouton "Supprimer"
      document
        .getElementById("deleteButton")
        .addEventListener("click", async () => {
          await deleteProduct(productId);
        });
    } else {
      console.error("Product document not found!");
    }
  } catch (error) {
    console.error("Error displaying product details:", error);
  }
}



//Ajouter le code de la fonction deleteProduct()







// Appeler la fonction pour afficher les détails du produit lorsque la page est chargée
window.addEventListener("load", displayProductDetails);
