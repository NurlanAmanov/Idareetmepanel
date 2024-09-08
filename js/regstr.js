// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHjM4FXUtIoYi9NQZ3Jx-VQf7021dtVeI",
  authDomain: "mehsul-panel.firebaseapp.com",
  projectId: "mehsul-panel",
  storageBucket: "mehsul-panel.appspot.com",
  messagingSenderId: "847869603942",
  appId: "1:847869603942:web:067106620e4462e536bda7",
  measurementId: "G-B4SB03NH8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get Firebase Auth instance
const auth = getAuth(app);

const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
  event.preventDefault();
  
  const regstrusermail = document.getElementById('regstrusermail').value;
  const regstrpass = document.getElementById('regstrpass').value;

  createUserWithEmailAndPassword(auth, regstrusermail, regstrpass)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Qeydiyyat uğurla tamamlandı");
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
