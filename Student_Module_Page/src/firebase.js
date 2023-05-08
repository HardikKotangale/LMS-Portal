import firebase from 'firebase/compat/app';
import "firebase/compat/database";

import { getAuth } from "firebase/auth";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDrLFP47ZfhLdlsiVlDYiSU1CqSkG9W56A",
  authDomain: "courses-55ce4.firebaseapp.com",
  databaseURL: "https://courses-55ce4-default-rtdb.firebaseio.com",
  projectId: "courses-55ce4",
  storageBucket: "courses-55ce4.appspot.com",
  messagingSenderId: "1019421520893",
  appId: "1:1019421520893:web:c4c5fdd267712e28ae1f94"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export const app=initializeApp(firebaseConfig);

export {fireDb};

export const auth=getAuth(fireDb);

export default fireDb.database().ref();