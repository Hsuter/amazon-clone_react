// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9fkQBoP6g73k8_PgYmiBiHxPcXPO8ang",
  authDomain: "naxy-brands.firebaseapp.com",
  projectId: "naxy-brands",
  storageBucket: "naxy-brands.appspot.com",
  messagingSenderId: "69690084110",
  appId: "1:69690084110:web:1549e28273d43b4827655f",
  measurementId: "G-WGKCQEPNYR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
