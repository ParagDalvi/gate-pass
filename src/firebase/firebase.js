import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAc6Em7o91mnnH5U0uhZ8DZF1ZGqe6GdEs",
    authDomain: "log-me-in-0.firebaseapp.com",
    databaseURL: "https://log-me-in-0.firebaseio.com",
    projectId: "log-me-in-0",
    storageBucket: "log-me-in-0.appspot.com",
    messagingSenderId: "110052693622",
    appId: "1:110052693622:web:8660be1938473cd20af157",
    measurementId: "G-ZHW4H9LNNM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;