// --- تنظیمات Firebase ---// بعداً اینجا باید firebaseConfig خودت رو بذاریconst firebaseConfig = {
 apiKey: "YOUR_API_KEY",
 authDomain: "YOUR_PROJECT.firebaseapp.com",
 projectId: "YOUR_PROJECT_ID",
 storageBucket: "YOUR_PROJECT.appspot.com",
 messagingSenderId: "YOUR_SENDER_ID",
 appId: "YOUR_APP_ID"
};

// شروع Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// دکمه‌ها
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// ورود با گوگلloginBtn.addEventListener("click", () => {
 const provider = new firebase.auth.GoogleAuthProvider();
 auth.signInWithPopup(provider);
});

// خروج
logoutBtn.addEventListener("click", () => {
 auth.signOut();
});

// تغییر وضعیت ورود/خروجauth.onAuthStateChanged(user => {
 if (user) {
 loginBtn.style.display = "none";
 logoutBtn.style.display = "inline-block";
 alert("خوش آمدی " + user.displayName);
 } else {
 loginBtn.style.display = "inline-block";
 logoutBtn.style.display = "none";
 }
});
