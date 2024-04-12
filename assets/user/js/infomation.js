document.addEventListener('DOMContentLoaded', function() {
    // Lấy dữ liệu người dùng từ localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Kiểm tra xem có dữ liệu người dùng hay không
    if (userData) {
        // Hiển thị thông tin người dùng trong các phần tử HTML
        document.getElementById('name').textContent = userData.name;
        document.getElementById('email').textContent = userData.email;
        document.getElementById('password').textContent = userData.password;
        document.getElementById('job').textContent = userData.job;
        document.getElementById('bio').textContent = userData.bio;
    } else {
        // Nếu không có dữ liệu người dùng, hiển thị thông báo
        document.getElementById('user-info').innerHTML = '<p>Không tìm thấy thông tin người dùng.</p>';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Lấy thông tin người dùng từ localStorage (nếu có)
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Hiển thị thông tin người dùng
    displayUserInfo(userData);

    // Lắng nghe sự kiện click vào nút chỉnh sửa
    const editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Lấy id của phần tử span chứa thông tin
            const spanId = button.previousElementSibling.id;

            // Hiển thị prompt để người dùng nhập thông tin mới
            const newValue = prompt(`Nhập thông tin mới cho ${spanId}:`, userData[spanId]);

            // Nếu người dùng không hủy hoặc nhập giá trị mới, cập nhật thông tin và lưu vào localStorage
            if (newValue !== null) {
                userData[spanId] = newValue;
                localStorage.setItem('userData', JSON.stringify(userData));
                // Hiển thị lại thông tin người dùng
                displayUserInfo(userData);
            }
        });
    });
});

// Hàm hiển thị thông tin người dùng
function displayUserInfo(userData) {
    document.getElementById('name').textContent = userData.name;
    document.getElementById('email').textContent = userData.email;
    document.getElementById('password').textContent = userData.password;
    document.getElementById('job').textContent = userData.job;
    document.getElementById('bio').textContent = userData.bio;
}

