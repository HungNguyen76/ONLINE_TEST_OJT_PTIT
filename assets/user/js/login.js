document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');

    // Định nghĩa adminData ở đây
    const adminData = {
        email: 'admin@gmail.com',
        password: '1234567890'
    };

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
                } else if (email === adminData.email && password === adminData.password) {
                    // Sử dụng adminData ở đây
                    alert(`Chào mừng admin đã đăng nhập`);
                    localStorage.setItem('isAdmin', true);
                    window.location.href = "/pages/admin/admin.html";
                } else {
                    alert("Mật khẩu không đúng. Vui lòng nhập lại!");
                }
            } else {
                alert("Không tìm thấy tài khoản. Vui lòng đăng ký trước khi đăng nhập!");
            }
        }
    });
});
