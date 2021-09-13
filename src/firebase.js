import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8RGa9XLIpxZQZrwGZ5rSKj1QgkjpBn6E",
  authDomain: "facebook-clone-4e2d1.firebaseapp.com",
  projectId: "facebook-clone-4e2d1",
  storageBucket: "facebook-clone-4e2d1.appspot.com",
  messagingSenderId: "205860374984",
  appId: "1:205860374984:web:70a8188e00106e6139d8fd",
  measurementId: "G-GSKGHSGBF0",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
export default db;
