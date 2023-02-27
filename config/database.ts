import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyA-I9eHRzHTFGsgk9ClhlkUo_7LbrZf6ws",
  authDomain: "heckatonsecond.firebaseapp.com",
  projectId: "heckatonsecond",
  storageBucket: "heckatonsecond.appspot.com",
  messagingSenderId: "102903690726",
  appId: "1:102903690726:web:12fab99d58175257fa9227",
  measurementId: "G-RG6J4KQCTS"
};
// logintodo

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage= getStorage(app);
const auth = getAuth(app);


// Initialize Cloud Firestore and get a reference to the service

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile,db,storage}
