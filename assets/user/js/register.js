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

        const existingAccounts = JSON.parse(localStorage.getItem('accounts')) || [];

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

        // Kiểm tra xem email đã tồn tại trong localStorage chưa
        const existingEmail = existingAccounts.find(account => account.email === email);
        if (existingEmail) {
            // Thông báo lỗi nếu email đã tồn tại
            alert("Email đã tồn tại!");
            return; // Dừng xử lý tiếp tục
        }

        // Kiểm tra xem mật khẩu đã tồn tại trong localStorage chưa
        const existingPassword = existingAccounts.find(account => account.password === password);
        if (existingPassword) {
            // Thông báo lỗi nếu mật khẩu đã tồn tại
            alert("Mật khẩu đã tồn tại!");
            return; // Dừng xử lý tiếp tục
        }

        // Tạo đối tượng mới cho tài khoản
        const newAccount = {
            name: name,
            email: email,
            password: password,
            job: job,
            bio: bio
        };

        // Thêm tài khoản mới vào mảng
        existingAccounts.push(newAccount);
        
        // Lưu mảng vào localStorage
        localStorage.setItem('accounts', JSON.stringify(existingAccounts));

        // Chuyển hướng đến trang đăng nhập
        window.location.href = "/pages/Ex ENG/login.html";
    });

    // Hàm kiểm tra định dạng email
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
