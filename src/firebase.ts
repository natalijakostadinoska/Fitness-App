import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxMUMHZw58-kU-twBRD25IT95gmWmYJZg",
  authDomain: "fittnessapp-19e9b.firebaseapp.com",
  projectId: "fittnessapp-19e9b",
  storageBucket: "fittnessapp-19e9b.firebasestorage.app",
  messagingSenderId: "11505614820",
  appId: "1:11505614820:web:cb3f9185667dc7d58851f1"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);