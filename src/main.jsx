import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Products from './mocks/products.json'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR_eckIqaseBouJhtKUBKd9XWtsqSy1mI",
  authDomain: "tienda-online-58145.firebaseapp.com",
  projectId: "tienda-online-58145",
  storageBucket: "tienda-online-58145.appspot.com",
  messagingSenderId: "62687050297",
  appId: "1:62687050297:web:6c2ba0ba0e39154bb76be8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

/* Products.forEach((product) => {
  addDoc(collection(db, 'products'), product)
  .then((docRef => {
    console.log('Documento agregado con id:', docRef.id)
  }))
  .catch((error) => {
    console.error('error al agregar documento', error)
  })
}) */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
