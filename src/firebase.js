import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDleESZZGWbtIKdMzuWB_85qSVFyksvlQs",
    authDomain: "eshop-b50a0.firebaseapp.com",
    projectId: "eshop-b50a0",
    storageBucket: "eshop-b50a0.appspot.com",
    messagingSenderId: "598869939914",
    appId: "1:598869939914:web:b72e465ca64e36a6b58633",
    measurementId: "G-1VF16Q9TM9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

