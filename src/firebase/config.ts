// Importar Firebase y Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase (usa los datos de tu segundo bloque de código)
const firebaseConfig = {
  apiKey: "AIzaSyCmLLdxteHD1BWnMZeEsz8nDm6JeZE9iV0",
  authDomain: "funny-games-db.firebaseapp.com",
  projectId: "funny-games-db",
  storageBucket: "funny-games-db.appspot.com",
  messagingSenderId: "3286007379",
  appId: "1:3286007379:web:50cebdb0cc6e7c47a0d0a6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);

// Exportar app para usar Firebase en otras partes del proyecto (si lo necesitas)
export default app;
