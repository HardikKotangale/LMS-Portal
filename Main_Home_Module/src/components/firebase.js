import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBjNcgC_bITzvFGJXMC6k01N67ZJLUo7CU",
  authDomain: "lmsportal-9a073.firebaseapp.com",
  databaseURL: "https://lmsportal-9a073-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lmsportal-9a073",
  storageBucket: "lmsportal-9a073.appspot.com",
  messagingSenderId: "995068357724",
  appId: "1:995068357724:web:74015688088f525bee0a99",
  measurementId: "G-JXLH8GSPF3"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
