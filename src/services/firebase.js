import firebase from 'firebase/app'
import 'firebase/auth'

// Firebase configuration
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDHynppzetJpNKGAmS_I8DGw83aykUysR4",
    authDomain: "wichat-c7fa1.firebaseapp.com",
    projectId: "wichat-c7fa1",
    storageBucket: "wichat-c7fa1.appspot.com",
    messagingSenderId: "478622947354",
    appId: "1:478622947354:web:282a665de05be69a4659a3"
  }).auth();