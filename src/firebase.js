import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: 'wddm-120-capstone',
  storageBucket: 'wddm-120-capstone.appspot.com',
  messagingSenderId: '1082082141260',
  appId: '1:1082082141260:web:7c1cf9651991ad4ae9c0e9',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
