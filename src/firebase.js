import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCOHJLtSWKBDFX0px8xBwlkhJbn-z4xWkk",
  authDomain: "clone-6705a.firebaseapp.com",
  projectId: "clone-6705a",
  storageBucket: "clone-6705a.appspot.com",
  messagingSenderId: "848576449704",
  appId: "1:848576449704:web:7e12742d1b52033be9469d",
  measurementId: "G-65YRHCZWLM"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);