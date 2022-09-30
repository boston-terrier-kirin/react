import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAlnni3Iup9gZjcCMbA8hhRp_co2Sk3V3c',
  authDomain: 'house-marketplace-app-d32d0.firebaseapp.com',
  projectId: 'house-marketplace-app-d32d0',
  storageBucket: 'house-marketplace-app-d32d0.appspot.com',
  messagingSenderId: '278743264338',
  appId: '1:278743264338:web:c650f8f9f151c8fd23038b',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
