// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTvgJsM7mTM1isM-QUbMUYDTv1rrqhi3w",
  authDomain: "coffee-managment-34cdd.firebaseapp.com",
  projectId: "coffee-managment-34cdd",
  storageBucket: "coffee-managment-34cdd.firebasestorage.app",
  messagingSenderId: "85761584435",
  appId: "1:85761584435:web:1b3cfb5a2348d93b7fa246",
  measurementId: "G-2HTC8DVSC6"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Initialize Cloud Storage and get a reference to the service
const storage = firebase.storage();

console.log(firebase.app().name);