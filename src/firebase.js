import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCCSlE6sdQLxnU5g1UU4uCkFz7x4SHk3_c",
    authDomain: "sayem-drive-clone.firebaseapp.com",
    projectId: "sayem-drive-clone",
    storageBucket: "sayem-drive-clone.appspot.com",
    messagingSenderId: "336612370765",
    appId: "1:336612370765:web:484c31319e2743f297ef04",
    measurementId: "G-08RF2XM40L"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db,storage,auth,provider}