const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyCpM030YQgIwLFNqjO4_J9MohAmbpLaXw4",
  authDomain: "cudtraffy.firebaseapp.com",
  projectId: "cudtraffy",
  storageBucket: "cudtraffy.appspot.com",
  messagingSenderId: "608203358645",
  appId: "1:608203358645:web:4f73b6a44aeeec79aad9fc",
  measurementId: "G-J2SL6CWDEJ",
};

firebase.initializeApp(firebaseConfig);
module.exports = { firebase };
