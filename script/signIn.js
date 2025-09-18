let emailInput = document.querySelector(".emailInput");
let passwordInput = document.querySelector(".passwordInput");
let submitBtn = document.querySelector(".submitBtn");
let loginForm = document.querySelector("form");

let handleSignin = function (e) {
    e.preventDefault();

    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    if (!email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!!!");
        return;
    }

    // Đăng nhập với Firebase Auth
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            alert("Đăng nhập thành công!!!");

            // Thiết lập phiên
            const userSession = {
                user: {
                    uid: user.uid,
                    email: user.email
                },
                expiry: Date.now() + 2 * 60 * 60 * 1000 // hết hạn sau 2 giờ
            };

            // Lưu vào localStorage
            localStorage.setItem("userSession", JSON.stringify(userSession));

            // Chuyển hướng tới trang chủ
            window.location.href = "../view/main.html";
        })
        .catch((error) => {
            let errorMessage = error.message;
            alert(`Lỗi: ${errorMessage}`);
            console.error(error);
        });
}

submitBtn.addEventListener("click", handleSignin);
