// Importar Firebase y Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase (usa los datos de tu segundo bloque de código)
const firebaseConfig = {
/*   apiKey: "AIzaSyCmLLdxteHD1BWnMZeEsz8nDm6JeZE9iV0",
  authDomain: "funny-games-db.firebaseapp.com",
  projectId: "funny-games-db",
  storageBucket: "funny-games-db.appspot.com",
  messagingSenderId: "3286007379",
  appId: "1:3286007379:web:50cebdb0cc6e7c47a0d0a6" */

  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);

// Exportar app para usar Firebase en otras partes del proyecto (si lo necesitas)
export default app;
