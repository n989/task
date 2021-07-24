import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3LVQZo-tnYFukX6WzSuqHJC2Gpxq19CI",
  authDomain: "task-27d62.firebaseapp.com",
  projectId: "task-27d62",
  storageBucket: "task-27d62.appspot.com",
  messagingSenderId: "229836000573",
  appId: "1:229836000573:web:1f8d34cd34f6b7fa1c8954",
  measurementId: "G-4DY6BC06DK",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
