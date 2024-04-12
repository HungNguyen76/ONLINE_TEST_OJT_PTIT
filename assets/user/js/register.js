document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn việc gửi form mặc định

        // Lấy giá trị từ các trường input
        const name = document.getElementById('name').value;
        const email = document.getElementById('mail').value;
        const password = document.getElementById('password').value;
        const job = document.getElementById('job').value;
        const bio = document.getElementById('bio').value;

        const existingEmail = localStorage.getItem(email);
        const existingPassword = localStorage.getItem(password);

        // Kiểm tra mật khẩu có ít nhất 6 ký tự không
        if (password.length < 6) {
            alert("Mật khẩu phải có ít nhất 6 ký tự!");
            return; // Dừng xử lý nếu mật khẩu không đủ độ dài
        }

        // Kiểm tra email có đúng định dạng không
        if (!validateEmail(email)) {
            alert("Email không đúng định dạng!");
            return; // Dừng xử lý nếu email không hợp lệ
        }

        if (existingEmail || existingPassword) {
            // Thông báo lỗi
            alert("Email hoặc mật khẩu đã tồn tại!");
        } else {
            // Lưu thông tin vào localStorage
            const userData = {
                name: name,
                email: email,
                password: password,
                job: job,
                bio: bio
            };
            localStorage.setItem('userData', JSON.stringify(userData));

            // Chuyển hướng đến trang đăng nhập
            window.location.href = "/pages/user/login.html";
        }
    });

    // Hàm kiểm tra định dạng email
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
