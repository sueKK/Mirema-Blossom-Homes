// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZuQtchNWLcsAokbzMezRSU4Jt86yfEN4",
  authDomain: "mirema-blossom-bloom.firebaseapp.com",
  projectId: "mirema-blossom-bloom",
  storageBucket: "mirema-blossom-bloom.firebasestorage.app",
  messagingSenderId: "638548869953",
  appId: "1:638548869953:web:6defea3741e2f08d8a97c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
