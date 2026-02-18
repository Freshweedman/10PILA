import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const getEnv = (key: string) => {
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key];
  }
  return undefined;
};

const firebaseConfig = {
  apiKey: getEnv('REACT_APP_FIREBASE_API_KEY'),
  authDomain: getEnv('REACT_APP_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnv('REACT_APP_FIREBASE_PROJECT_ID'),
  storageBucket: getEnv('REACT_APP_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnv('REACT_APP_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnv('REACT_APP_FIREBASE_APP_ID')
};

// Initialize Firebase only if config is present, otherwise mock for UI dev
let auth: any;
let db: any;

try {
  // Check if we have at least an API key to attempt initialization
  if (firebaseConfig.apiKey) {
      const app = initializeApp(firebaseConfig);
      auth = getAuth(app);
      db = getFirestore(app);
  } else {
      console.warn("Firebase config missing. Auth features will be simulated.");
  }
} catch (e) {
  console.error("Firebase initialization failed", e);
}

export const subscribeToAuthChanges = (callback: (user: User | null) => void) => {
  if (!auth) {
      callback(null);
      return () => {};
  }
  return onAuthStateChanged(auth, callback);
};

export const signInAnon = async () => {
  if (!auth) return;
  try {
    await signInAnonymously(auth);
  } catch (error) {
    console.error("Anonymous Sign-In failed", error);
  }
};