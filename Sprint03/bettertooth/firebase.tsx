// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBeexU7kWRj8p11ejcJkyc8tIMwrBLBjo",
  authDomain: "loginfirebase-11799.firebaseapp.com",
  projectId: "loginfirebase-11799",
  storageBucket: "loginfirebase-11799.firebasestorage.app",
  messagingSenderId: "35284034941",
  appId: "1:35284034941:web:786ca73564aac016025814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
