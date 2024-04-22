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
            // Kiểm tra email có bị block trong localStorage không
            const isBlocked = localStorage.getItem(email);
            if (isBlocked && isBlocked === 'true') {
                alert(`Tài khoản ${email} đang bị block. Vui lòng liên hệ với admin để mở.`);
            } else {
                // Kiểm tra xem người dùng có phải là admin không
                const isAdmin = email === adminData.email && password === adminData.password;

                if (isAdmin) {
                    // Đăng nhập với quyền admin
                    alert(`Chào mừng admin đã đăng nhập`);
                    // Lưu trạng thái đăng nhập của admin vào localStorage
                    localStorage.setItem('isAdmin', true);
                    // Chuyển hướng đến trang admin
                    window.location.href = "/pages/admin/admin.html";
                } else {
                    // Đăng nhập với tài khoản người dùng
                    alert(`Chào mừng bạn đã đăng nhập với email: ${email}`);
                    // Lưu trạng thái đăng nhập của người dùng vào localStorage
                    localStorage.setItem('currentUser', email);
                    // Chuyển hướng đến trang index.html
                    window.location.href = "/pages/index.html";
                }
            }
        }
    });
});
