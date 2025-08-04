// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoyCAdEmG9nSWmYhDTYtzkarNml2LOl5o",
  authDomain: "monex-academ.firebaseapp.com",
  projectId: "monex-academ",
  storageBucket: "monex-academ.firebasestorage.app",
  messagingSenderId: "739982923559",
  appId: "1:739982923559:web:47ebe50822acba14d3fb02",
  measurementId: "G-D7CGRPRKQE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
