// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyB6tclhjMjgnDANP3b_uy8L4Y0o310wFsQ',
  authDomain: 'whatsapp-clone-c4c80.firebaseapp.com',
  projectId: 'whatsapp-clone-c4c80',
  storageBucket: 'whatsapp-clone-c4c80.appspot.com',
  messagingSenderId: '804794929634',
  appId: '1:804794929634:web:4df6b4130d4eee06f3a9bb',
  measurementId: 'G-MCPPG3HHBG',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default db;
