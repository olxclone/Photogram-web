import firebase from "firebase";

export let firebaseConfig = {
  apiKey: "AIzaSyCpu15gLj26DvOR6rES93CXR_G-yYUat4E",
  authDomain: "olxclone-3137d.firebaseapp.com",
  databaseURL: "https://olxclone-3137d-default-rtdb.firebaseio.com",
  projectId: "olxclone-3137d",
  storageBucket: "olxclone-3137d.appspot.com",
  messagingSenderId: "1095734728208",
  appId: "1:1095734728208:web:02a56bfe052715ee051c95",
  measurementId: "G-GGS6GVTL0H",
};
 let fire = firebase.initializeApp(firebaseConfig); firebase.analytics();
export default fire;
