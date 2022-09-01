import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-O8e2uFmB_OsKYw6iRxEqiURXUGXb3zk",
  authDomain: "blogproject-c1424.firebaseapp.com",
  projectId: "blogproject-c1424",
  storageBucket: "blogproject-c1424.appspot.com",
  messagingSenderId: "407843443003",
  appId: "1:407843443003:web:b67f215b983cfad6e5a71e"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
