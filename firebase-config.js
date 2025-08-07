// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoyCAdEmG9nSWmYhDTYtzkarNml2LOl5o",
  authDomain: "monex-academ.firebaseapp.com",
  projectId: "monex-academ",
  storageBucket: "monex-academ.firebasestorage.app",
  messagingSenderId: "739982923559",
  appId: "1:739982923559:web:47ebe50822acba14d3fb02",
  measurementId: "G-D7CGRPRKQE"
};

export const app = initializeApp(firebaseConfig);
