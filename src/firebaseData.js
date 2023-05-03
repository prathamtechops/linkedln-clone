import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDwRQMYuMGjxoA-H2w-piKrcZbnvPywcAg",
    authDomain: "linkedln-clone-bfb6a.firebaseapp.com",
    projectId: "linkedln-clone-bfb6a",
    storageBucket: "linkedln-clone-bfb6a.appspot.com",
    messagingSenderId: "86436117945",
    appId: "1:86436117945:web:a0852556e5f031227a4a68",
    measurementId: "G-L404GYWCFN",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
