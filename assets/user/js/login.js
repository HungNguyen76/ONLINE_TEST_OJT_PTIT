document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');

    // Định nghĩa adminData ở đây
    const adminData = {
        email: 'admin@gmail.com',
        password: '1234567890'
    };

    loginForm.addEventListener('submit', function (event) {
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
                // Lấy danh sách tài khoản từ localStorage
                const accounts = JSON.parse(localStorage.getItem('accounts'));
                // Tìm kiếm tài khoản có email và mật khẩu tương ứng trong danh sách tài khoản
                const account = accounts.find(acc => acc.email === email && acc.password === password);

                const isAdmin = email === adminData.email && password === adminData.password;

                if (account) {
                    // Tài khoản tồn tại và thông tin đăng nhập chính xác, tiếp tục xử lý đăng nhập
                    alert(`Chào mừng bạn đã đăng nhập với email: ${email}`);
                    // Lưu trạng thái đăng nhập của người dùng vào localStorage
                    localStorage.setItem('currentUser', email);
                    // Chuyển hướng đến trang index.html
                    window.location.href = "/pages/Ex ENG/exam.html";
                } else if (isAdmin) {
                    // Đăng nhập với quyền admin
                    alert(`Chào mừng admin đã đăng nhập`);
                    // Lưu trạng thái đăng nhập của admin vào localStorage
                    localStorage.setItem('isAdmin', true);
                    // Chuyển hướng đến trang admin
                    window.location.href = "/pages/admin/admin.html";
                } else {
                    // Tài khoản không tồn tại hoặc thông tin đăng nhập không chính xác, thông báo lỗi
                    alert("Email hoặc mật khẩu không chính xác.");
                }
            }
        }
    });
});
