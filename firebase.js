// firebaseConfig.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_APIKEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_RENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENTID,
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser.email;
    console.log("Sesión iniciada: ", user);
    return true;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error al iniciar sesión: ", errorCode, errorMessage);
    return false;
  }
}

export async function addData(collectionName, data) {
  try {
    const colRef = collection(db, collectionName);
    const docRef = await addDoc(colRef, data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
