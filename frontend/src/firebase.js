import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDREo_HdDkRGT1fwMWhqdNydiLUi2V2WEc",
  authDomain: "chat-application-4a471.firebaseapp.com",
  projectId: "chat-application-4a471",
  storageBucket: "chat-application-4a471.appspot.com",
  messagingSenderId: "45451615790",
  appId: "1:45451615790:web:1b53e2581befb6f7cc09bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth  = getAuth();