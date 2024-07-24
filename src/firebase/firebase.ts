import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB8KqnU0NGE8Ygl5yy1VymXIOXtCMDd-4",
    authDomain: "link-share-app-e5717.firebaseapp.com",
    projectId: "link-share-app-e5717",
    storageBucket: "link-share-app-e5717.appspot.com",
    messagingSenderId: "387446578807",
    appId: "1:387446578807:web:ce37ef7b57ea4599e6b072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export { app, auth }