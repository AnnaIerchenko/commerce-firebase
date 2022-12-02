
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDOVDZqX5pgP0vai9pRGyw1ABKbtgaQktE",
  authDomain: "ecommerce-firebase-c4825.firebaseapp.com",
  projectId: "ecommerce-firebase-c4825",
  storageBucket: "ecommerce-firebase-c4825.appspot.com",
  messagingSenderId: "778479974169",
  appId: "1:778479974169:web:0ec108b311e6f976aaf788",
  measurementId: "G-EKE3L0RG6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app