importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js")

var firebaseConfig = {
    apiKey: "AIzaSyB6FQy1fgUA3nQDfvq_MgpKIUgX_xX3B7k",
    authDomain: "sato-pwa.firebaseapp.com",
    projectId: "sato-pwa",
    storageBucket: "sato-pwa.appspot.com",
    messagingSenderId: "544663753323",
    appId: "1:544663753323:web:75b274f894c95a1712d72e",
  };


if (!firebase.apps.length) {
    console.log('test');
    firebase.initializeApp({
        messagingSenderId:  "544663753323"
    });
    // firebase.messaging();
    //background notifications will be received here
    // firebase.messaging().setBackgroundMessageHandler((payload) => console.log("payload", payload));
}