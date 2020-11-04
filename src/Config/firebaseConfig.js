import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjQSwM_MV4RKdZoXrmGCHl73JH7_ETckg",
  authDomain: "cv-project-60817.firebaseapp.com",
  databaseURL: "https://cv-project-60817.firebaseio.com",
  projectId: "cv-project-60817",
  storageBucket: "cv-project-60817.appspot.com",
  messagingSenderId: "233127447393",
  appId: "1:233127447393:web:341eb73900a029da585320",
  measurementId: "G-6DDBCHSP4G",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
