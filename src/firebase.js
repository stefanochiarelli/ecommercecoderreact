import firebase from 'firebase/app'

import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDoIOVLstEWFi9frC2geIIGx9REznOODv0",
    authDomain: "coderecom-chiarellicoffee.firebaseapp.com",
    projectId: "coderecom-chiarellicoffee",
    storageBucket: "coderecom-chiarellicoffee.appspot.com",
    messagingSenderId: "899891401480",
    appId: "1:899891401480:web:7a6fb3287c9b113f8692bd"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();