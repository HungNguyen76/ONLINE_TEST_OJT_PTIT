document.addEventListener('DOMContentLoaded', function () {
    var searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        timKiemKhoaHoc();
    });
});

function timKiemKhoaHoc() {
    // Lấy giá trị nhập vào trong ô tìm kiếm
    var searchInput = document.getElementById('searchInput');
    var searchValue = searchInput.value.trim().toLowerCase(); // Lấy giá trị và chuyển thành chữ thường

    // Tách chuỗi tìm kiếm thành các từ riêng biệt
    var searchWords = searchValue.split(" ");

    // Lọc danh sách khóa học theo từng từ
    var khoaHocList = document.querySelectorAll('.khoa-hoc');
    khoaHocList.forEach(function (khoaHoc) {
        var khoaHocTen = khoaHoc.querySelector('.card-title').textContent.toLowerCase(); // Lấy tên khóa học và chuyển thành chữ thường
        var match = true;
        // Kiểm tra xem mỗi từ trong chuỗi tìm kiếm có xuất hiện trong tên khóa học không
        searchWords.forEach(function(word) {
            if (!khoaHocTen.includes(word)) {
                match = false;
            }
        });
        // Hiển thị hoặc ẩn khóa học dựa trên kết quả so sánh
        if (match) {
            khoaHoc.style.display = 'block';
        } else {
            khoaHoc.style.display = 'none';
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    // Kiểm tra giá trị của khóa checkUser trong localStorage
    const checkUser = localStorage.getItem('checkUser');
    if (checkUser === 'true') {
        // Nếu checkUser là true, hiển thị dropdown và ẩn nút đăng nhập và đăng ký
        const signinButtons = document.querySelectorAll('.nav-link.btn.btn-primary.rounded-pill.text-white');
        signinButtons.forEach(button => {
            button.style.display = 'none';
        });

        // Lấy tên người dùng từ localStorage
        const userData = localStorage.getItem('userData');
        if (userData) {
            const user = JSON.parse(userData);
            const userName = user.name;
            // Sử dụng hàm createDropdown để tạo dropdown và hiển thị tên người dùng
            createDropdown(userName);
        }
    }
});

// Tạo một dropdown
function createDropdown(userName) {
    // Tạo phần tử cho dropdown
    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');

    // Tạo nút dropdown
    const dropdownButton = document.createElement('button');
    dropdownButton.textContent = userName;
    dropdownButton.classList.add('btn', 'btn-secondary', 'dropdown-toggle');
    dropdownButton.setAttribute('type', 'button');
    dropdownButton.setAttribute('id', 'dropdownMenuButton');
    dropdownButton.setAttribute('data-toggle', 'dropdown');
    dropdownButton.setAttribute('aria-haspopup', 'true');
    dropdownButton.setAttribute('aria-expanded', 'false');

    // Tạo dropdown menu
    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu', 'dropdown-menu-right');
    dropdownMenu.setAttribute('aria-labelledby', 'dropdownMenuButton');

    // Tạo các mục trong dropdown menu (ví dụ)
    const profileItem = document.createElement('a');
    profileItem.classList.add('dropdown-item');
    profileItem.textContent = 'Thông tin người dùng';
    profileItem.setAttribute('href', '/pages/user/infomation.html');

    const logoutItem = document.createElement('a');
    logoutItem.classList.add('dropdown-item');
    logoutItem.textContent = 'Đăng xuất';
    logoutItem.setAttribute('href', '/pages/index.html');
    // Thêm sự kiện click cho mục "Đăng xuất"
    logoutItem.addEventListener('click', function () {
        // Xóa key 'checkUser' trong localStorage
        const confirmLogout = confirm('Bạn có chắc chắn muốn đăng xuất?');
        if (confirmLogout) {
            // Xóa key 'checkUser' trong localStorage
            localStorage.removeItem('checkUser');
            // Hiển thị lại nút đăng nhập và đăng ký
            const signinButtons = document.querySelectorAll('.nav-link.btn.btn-primary.rounded-pill.text-white');
            signinButtons.forEach(button => {
                button.style.display = 'block';
            });
            // Xóa dropdown khỏi DOM
            dropdown.remove();
        }
    });

    // Thêm các mục vào dropdown menu
    dropdownMenu.appendChild(profileItem);
    dropdownMenu.appendChild(logoutItem);

    // Thêm nút dropdown và dropdown menu vào dropdown
    dropdown.appendChild(dropdownButton);
    dropdown.appendChild(dropdownMenu);

    // Thêm dropdown vào phần tử trong DOM (ví dụ: navbar)
    const navbar = document.querySelector('.navbar'); // Thay '.navbar' bằng lớp hoặc id của phần tử mà bạn muốn thêm dropdown
    navbar.appendChild(dropdown);
}

document.addEventListener('DOMContentLoaded', function () {
    // Kiểm tra giá trị của khóa isAdmin trong localStorage
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === 'true') {
        // Nếu isAdmin là true, ẩn nút đăng nhập và đăng ký
        const signinButtons = document.querySelectorAll('.nav-link.btn.btn-primary.rounded-pill.text-white');
        signinButtons.forEach(button => {
            button.style.display = 'none';
        });

        // Tạo button chuyển đến trang admin.html
        createAdminButton();
    }
});

function createAdminButton() {
    const adminButtonContainer = document.getElementById('adminButtonContainer');
    if (adminButtonContainer) {
        const button = document.createElement('button');
        button.textContent = 'Chuyển đến trang Admin';
        button.style.marginLeft = '50px'; // Thêm kiểu này để đẩy nút sang phải
        button.addEventListener('click', function() {
            window.location.href = '/pages/admin/admin.html';
        });
        adminButtonContainer.appendChild(button);
    } else {
        console.error("Không tìm thấy phần tử với id 'adminButtonContainer'");
    }
}
