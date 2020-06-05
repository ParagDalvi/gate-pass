import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD2JFjiNNIiXq6SXvuOkdUgvp7DVuAAxEE",
    authDomain: "logmein-gate-pass.firebaseapp.com",
    databaseURL: "https://logmein-gate-pass.firebaseio.com",
    projectId: "logmein-gate-pass",
    storageBucket: "logmein-gate-pass.appspot.com",
    messagingSenderId: "55828838144",
    appId: "1:55828838144:web:0a7851d7a3290e6488e5e5",
    measurementId: "G-CQ78256EKM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;