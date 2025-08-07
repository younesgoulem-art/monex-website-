// auth-protect.js
import { app } from './firebase-config.js';
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // المستخدم غير مسجل دخول → نعيده إلى login.html
    window.location.href = "login.html";
  }
});
