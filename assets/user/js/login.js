document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn form được gửi đi mặc định

        // Lấy giá trị email và mật khẩu từ form
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Kiểm tra xem email và mật khẩu có hợp lệ không
        if (email && password) {
            // Kiểm tra email và mật khẩu có khớp với dữ liệu trong localStorage không
            const userData = localStorage.getItem('userData');
            if (userData) {
                const user = JSON.parse(userData);
                if (email === user.email && password === user.password) {
                    // Đăng nhập thành công, chuyển hướng đến trang index.html
                    alert(`Chào mừng bạn đã đăng nhập với email: ${email}`);
                    localStorage.setItem('checkUser', true);
                    window.location.href = "/pages/index.html";
                } else {
                    alert("Email hoặc mật khẩu không đúng. Vui lòng thử lại!");
                }
            } else {
                alert("Không tìm thấy tài khoản. Vui lòng đăng ký trước khi đăng nhập!");
            }
        } else {
            alert("Vui lòng nhập đầy đủ email và mật khẩu!");
        }
    });
});
