import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBzcbZ2rx6L_rmuE_PMo4M58bwEr456niY",
    authDomain: "near-nft-listing-6eec8.firebaseapp.com",
    projectId: "near-nft-listing-6eec8",
    storageBucket: "near-nft-listing-6eec8.appspot.com",
    messagingSenderId: "941387173187",
    appId: "1:941387173187:web:086fe69b91a7746d6a33f6",
    measurementId: "G-K70GB4WC9C"
  };

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const db = getFirestore(app)
export const storage = getStorage(app);
export const auth = getAuth()
export {db}
