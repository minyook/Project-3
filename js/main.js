// 🔹 Firebase 설정
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// 🔹 Firebase 초기화
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 🔹 로그인 상태 체크
auth.onAuthStateChanged((user) => {
    if (user) {
        // ✅ 로그인 상태
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("signupBtn").style.display = "none";
        document.getElementById("mypageBtn").style.display = "block";
        document.getElementById("logoutBtn").style.display = "block";
    } else {
        // ❌ 로그아웃 상태
        document.getElementById("loginBtn").style.display = "block";
        document.getElementById("signupBtn").style.display = "block";
        document.getElementById("mypageBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "none";
    }
});

// 🔹 로그아웃 기능
function logout() {
    auth.signOut().then(() => {
        alert("로그아웃되었습니다.");
        location.reload(); // 페이지 새로고침
    }).catch((error) => {
        console.error("로그아웃 오류:", error);
    });
}
