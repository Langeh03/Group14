import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCtetrWzvoN7qglys4jhyXgwrIXP767iN8",
  authDomain: "roadpal-66485.firebaseapp.com",
  projectId: "roadpal-66485",
  storageBucket: "roadpal-66485.appspot.com",
  messagingSenderId: "910642919098",
  appId: "1:910642919098:web:6ed12febdba70534787483",
  measurementId: "G-K4VBB0602Q",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };