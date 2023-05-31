import firebase from "firebase/compat/app"
import "firebase/compat/storage"

const app = firebase.initializeApp({
    "projectId": "nodo-final",
    "appId": "1:342865473265:web:db225344629d344a3cc350",
    "storageBucket": "nodo-final.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDb7NmIELA7USFf19u84meL1hiNJTZTvXA",
    "authDomain": "nodo-final.firebaseapp.com",
    "messagingSenderId": "342865473265"
  });

  export default app;