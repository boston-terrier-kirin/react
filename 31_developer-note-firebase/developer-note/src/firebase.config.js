import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDM2hVbfsgz7wOL_OJeXyC5HPBedhsFpCg',
  authDomain: 'developer-note-cef6b.firebaseapp.com',
  projectId: 'developer-note-cef6b',
  storageBucket: 'developer-note-cef6b.appspot.com',
  messagingSenderId: '982098612522',
  appId: '1:982098612522:web:410a5abedc355bbb2e0e53',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
