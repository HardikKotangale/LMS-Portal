import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBsVh3Vk0tFYfv1dZU-RsFrjAj15zixNkw",
    authDomain: "user-authentication-f6834.firebaseapp.com",
    projectId: "user-authentication-f6834",
    storageBucket: "user-authentication-f6834.appspot.com",
    messagingSenderId: "967986521695",
    appId: "1:967986521695:web:34cc93b117fda93b1d5dea"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
