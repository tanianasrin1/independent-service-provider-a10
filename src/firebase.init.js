// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo3U-EzrZo1ywqZExVMaqWht4kbWoHgBo",
  authDomain: "independent-service-2bb06.firebaseapp.com",
  projectId: "independent-service-2bb06",
  storageBucket: "independent-service-2bb06.appspot.com",
  messagingSenderId: "65234413437",
  appId: "1:65234413437:web:830a500e4a2ba627b80e14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;