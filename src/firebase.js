import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuw3xU259wOkixaTogms2r__s06a0_wkA",
  authDomain: "instagram-login-72f6f.firebaseapp.com",
  projectId: "instagram-login-72f6f",
  storageBucket: "instagram-login-72f6f.appspot.com",
  messagingSenderId: "628610655487",
  appId: "1:628610655487:web:7d55c2808baa85e34358ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export {auth, storage, db,}
