import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDlJrPhJ8p77PIjbMGdSnHHIaNyiKV-Cy4",
  authDomain: "e-library-c7cb4.firebaseapp.com",
  projectId: "e-library-c7cb4",
  storageBucket: "e-library-c7cb4.appspot.com",
  messagingSenderId: "952611414310",
  appId: "1:952611414310:web:e1c20d803543b6662c21e7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()

