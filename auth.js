import { auth, db } from "./firebase.js";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// SIGN UP
window.signUpUser = function() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      let user = userCredential.user;

      // SAVE USER INFO IN DATABASE
      set(ref(db, "users/" + user.uid), {
        name: name,
        email: email,
        role: role
      });

      alert("Signed up successfully!");
      window.location = "login.html";
    })
    .catch((err) => {
      alert(err.message);
    });
};

// LOGIN
window.loginUser = function() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      let user = userCredential.user;
      alert("Login success!");
      window.location = "dashboard.html"; // We’ll change this later
    })
    .catch((err) => {
      alert(err.message);
    });
};
