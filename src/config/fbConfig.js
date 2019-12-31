import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCGjjpo2igujYMtX2XgMTcrNBTwXSNw7Bw",
    authDomain: "blogging-blog.firebaseapp.com",
    databaseURL: "https://blogging-blog.firebaseio.com",
    projectId: "blogging-blog",
    storageBucket: "blogging-blog.appspot.com",
    messagingSenderId: "596972393019",
    appId: "1:596972393019:web:b1a63ea183cddcccd3021e",
    measurementId: "G-SZFSE7PE3E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;