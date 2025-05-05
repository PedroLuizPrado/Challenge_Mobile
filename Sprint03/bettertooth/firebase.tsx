import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBeexU7kWRj8p11ejcJkyc8tIMwrBLBjo",
  authDomain: "loginfirebase-11799.firebaseapp.com",
  projectId: "loginfirebase-11799",
  storageBucket: "loginfirebase-11799.appspot.com",
  messagingSenderId: "35284034941",
  appId: "1:35284034941:web:786ca73564aac016025814"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };