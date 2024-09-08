// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

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

// DOM tamamen yüklendiğinde çalışması için:
document.addEventListener("DOMContentLoaded", function() {
  const button2 = document.getElementById('button2');
  const notification = document.getElementById('notification'); // Bildiriş konteyneri
  
  button2.addEventListener("click", function(event) {
    event.preventDefault();

    const mail = document.getElementById('mail').value;
    const pass = document.getElementById('pass').value;

    signInWithEmailAndPassword(auth, mail, pass)
      .then((userCredential) => {
       
        const user = userCredential.user;

 
        notification.innerHTML = `
          <div class="alert alert-success text-xl" role="alert">
            Giriş uğurlu oldu! Yönləndirilir...
          </div>
        `;

  
        setTimeout(() => {
          window.location.href = "panel.htm";
        }, 2000);
      })
      .catch((error) => {
        const errorMessage = error.message;

        // Xəta bildirişi göstər
        notification.innerHTML = `
          <div class="alert alert-danger" role="alert">
            Xəta: ${errorMessage}
          </div>
        `;
      });
  });
});
