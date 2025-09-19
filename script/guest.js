let userSession = JSON.parse(localStorage.getItem('user_session'));
const profileDropdown = document.querySelector("#author-menu-drd");
if (userSession) {
    const now = new Date().getTime();
    if (now < userSession.expiry) {

        // Hiển thị dropdown list sau khi đăng nhập

        profileDropdown.innerHTML = `
            <li class="bg-grey-light"><span class=dropdown-item">${userSession.user.email}</span></li>
            <li><a class="dropdown-item" href="../view/order.html">Đơn hàng</a></li>
            <li><a class="dropdown-item" href="../view/balance.html">Ví</a></li>
            <li><button id="logout-btn" class="btn btn-danger">Đăng xuất</button></li>
        `;

        // Xử lý đăng xuất

        document.getElementById('logout-btn').addEventListener('click', () => {
            if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
                firebase.auth().signOut().then(() => {

                    // Xóa thông tin phiên của người dùng khỏi local storage

                    localStorage.removeItem("user_session");

                    // Chuyên hướng tới trang đăng nhập

                    window.location.href = "../view/signIn.html";

                }).catch((error) => {
                    let errorMessage = error.message;
                    alert(`Lỗi: ${errorMessage}`);
                    console.log(error);
                })
            }
        })
    }
}