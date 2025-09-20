let usernameInput = document.querySelector(".usernameInput");
let emailInput = document.querySelector(".emailInput");
let passwordInput = document.querySelector(".passwordInput");
let confirmpasswordInput = document.querySelector(".confirmpasswordInput");
let submitBtn = document.querySelector(".submitBtn");

let handleRegister = (e) => {

    e.preventDefault();

    let username = usernameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let confirmPassword = confirmpasswordInput.value;

    if (!username || !email || !password || !confirmPassword) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Vui lòng nhập khớp mật khẩu!!!");
    }

    // Tạo tài khoản với Firebase Auth

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {

            let user = userCredential.user;

            let userData = {
                username,
                email,
                password,
                role_id: "user",
                balance: 0, // Số dư ví mặc định là 0
            }

            // Thêm user vào Firestore

            db.collection("users").add(userData)
                .then((docRef) => {
                    alert("Đăng ký thành công!!!");
                    window.location.href = "../view/signIn.html";
                    console.log("Document written with ID.", docRef.id);
                })
                .catch((error) => {
                    alert("Đăng ký thất bại");
                    console.log("Error adding document: ", error);
                })

        })

        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(`Lỗi: ${errorMessage}`);
            console.log(errorMessage);
        })

}

submitBtn.addEventListener("click", handleRegister);