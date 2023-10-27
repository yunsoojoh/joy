import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

import { firebaseConfig } from '../firebase.config.js';

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, firebaseApp };
