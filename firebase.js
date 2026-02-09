import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqDmsMp2eAuHJBcjW-ciO2JcLTXapiIrs",
  authDomain: "the-lalit-d7472.firebaseapp.com",
  databaseURL: "https://the-lalit-d7472-default-rtdb.firebaseio.com",
  projectId: "the-lalit-d7472",
  storageBucket: "the-lalit-d7472.appspot.com",
  messagingSenderId: "479237084229",
  appId: "1:479237084229:web:f1da384b45c5883b12ff2c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
