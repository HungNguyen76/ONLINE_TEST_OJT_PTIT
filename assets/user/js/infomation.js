document.addEventListener('DOMContentLoaded', function() {
    // Lấy thông tin người dùng từ localStorage (nếu có)
    const currentUserEmail = localStorage.getItem('currentUser');
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Tìm tài khoản có email khớp với email của currentUser
    const currentUserAccount = accounts.find(account => account.email === currentUserEmail);

    // Lấy danh sách các đề đã làm từ localStorage (nếu có)
    const doneExams = JSON.parse(localStorage.getItem('doneExams')) || [];

    // Hiển thị thông tin người dùng nếu tìm thấy tài khoản
    if (currentUserAccount) {
        displayUserInfo(currentUserAccount);

        // Hiển thị danh sách các đề đã làm
        displayDoneExams(doneExams);

        // Lắng nghe sự kiện click vào nút chỉnh sửa
        const editButtons = document.querySelectorAll('.edit-button');
        editButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Lấy id của phần tử span chứa thông tin
                const spanId = button.previousElementSibling.id;

                // Hiển thị prompt để người dùng nhập thông tin mới
                const newValue = prompt(`Nhập thông tin mới cho ${spanId}:`, currentUserAccount[spanId]);

                // Nếu người dùng không hủy hoặc nhập giá trị mới, cập nhật thông tin và lưu vào localStorage
                if (newValue !== null) {
                    currentUserAccount[spanId] = newValue;
                    // Cập nhật thông tin người dùng trong accounts
                    accounts.forEach(account => {
                        if (account.email === currentUserEmail) {
                            account[spanId] = newValue;
                        }
                    });
                    localStorage.setItem('accounts', JSON.stringify(accounts));
                    // Hiển thị lại thông tin người dùng
                    displayUserInfo(currentUserAccount);
                }
            });
        });
    } else {
        // Hiển thị thông báo nếu không tìm thấy tài khoản
        document.getElementById('user-info').innerHTML = '<p>Không tìm thấy thông tin người dùng.</p>';
    }
});

// Hàm hiển thị thông tin người dùng
function displayUserInfo(userData) {
    document.getElementById('name').textContent = userData.name;
    document.getElementById('email').textContent = userData.email;
    document.getElementById('password').textContent = userData.password;
    document.getElementById('job').textContent = userData.job;
    document.getElementById('bio').textContent = userData.bio;
}

// Hàm hiển thị danh sách các đề đã làm
function displayDoneExams(doneExams) {
    const examDoneElement = document.getElementById('examDone');
    if (doneExams.length > 0) {
        examDoneElement.textContent = doneExams.join(', '); // Hiển thị danh sách các đề đã làm, phân tách bằng dấu phẩy
    } else {
        examDoneElement.textContent = 'Chưa làm đề nào.'; // Hiển thị thông báo nếu không có đề nào được làm
    }
}