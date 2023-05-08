import firebase from 'firebase/compat/app';
import "firebase/compat/database";

var firebaseConfig = {
    apiKey: "AIzaSyBk61NwraASPWz8WzkcV1jjfuPFkHoWX-4",
    authDomain: "oytie-admin.firebaseapp.com",
    projectId: "oytie-admin",
    storageBucket: "oytie-admin.appspot.com",
    messagingSenderId: "718439396766",
    appId: "1:718439396766:web:899a2abf007a6a842c128f"
  };

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();