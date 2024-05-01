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
        searchWords.forEach(function (word) {
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
    // Kiểm tra giá trị của khóa currentUser trong localStorage
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const signinButtons = document.querySelectorAll('.nav-link.btn.btn-primary.rounded-pill.text-white');
        signinButtons.forEach(button => {
            button.style.display = 'none';
        });
        // Nếu khóa currentUser tồn tại, thực hiện tạo dropdown và hiển thị tên người dùng
        const userName = currentUser;
        // Sử dụng hàm createDropdown để tạo dropdown và hiển thị tên người dùng
        createDropdown(userName);
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
    profileItem.setAttribute('href', '/pages/Ex ENG/infomation.html');

    const logoutItem = document.createElement('a');
    logoutItem.classList.add('dropdown-item');
    logoutItem.textContent = 'Đăng xuất';
    logoutItem.setAttribute('href', '/pages/Ex ENG/exam.html');
    // Thêm sự kiện click cho mục "Đăng xuất"
    logoutItem.addEventListener('click', function () {
        const confirmLogout = confirm('Bạn có chắc chắn muốn đăng xuất?');
        if (confirmLogout) {
            // Xóa key 'currentUser' trong localStorage
            localStorage.removeItem('currentUser');
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
        button.addEventListener('click', function () {
            window.location.href = '/pages/admin/admin.html';
        });
        adminButtonContainer.appendChild(button);
    } else {
        console.error("Không tìm thấy phần tử với id 'adminButtonContainer'");
    }
}

var subjectsDropdown = document.getElementById('subjects-dropdown');
var subjectsDropdownMenu = document.getElementById('subjects-dropdown-menu');

// Bắt sự kiện trỏ chuột vào mục "Các môn thi"
subjectsDropdown.addEventListener('mouseover', function () {
    // Hiển thị danh sách môn học khi trỏ chuột vào
    subjectsDropdownMenu.classList.add('show');
});

// Bắt sự kiện rời chuột ra khỏi mục "Các môn thi" hoặc danh sách môn học
subjectsDropdown.addEventListener('mouseleave', function () {
    // Ẩn danh sách môn học khi rời chuột ra khỏi mục "Các môn thi" hoặc danh sách môn học
    subjectsDropdownMenu.classList.remove('show');
});

// Bắt sự kiện click vào một môn học cụ thể
document.querySelectorAll('.subject-item').forEach(item => {
    item.addEventListener('click', function (event) {
        // Ngăn chặn hành động mặc định của thẻ a (chuyển hướng)
        event.preventDefault();
        // Lấy href của môn học được click
        var href = this.getAttribute('href');
        // Chuyển hướng sang trang tương ứng
        window.location.href = href;
    });
});

function startCountdown() {
    var duration = 5 * 60; // 5 phút
    var countdownDisplay = document.getElementById('countdown');

    var timer = setInterval(function () {
        var minutes = Math.floor(duration / 60);
        var seconds = duration % 60;

        countdownDisplay.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        if (--duration < 0) {
            clearInterval(timer);
            countdownDisplay.textContent = "Hết giờ!";
            // Thực hiện hành động nào đó khi hết thời gian
        }
    }, 1000);

    // Lưu trạng thái đã bắt đầu đếm ngược vào localStorage
    localStorage.setItem('countdownStarted', 'true');
}

// Bắt sự kiện click vào nút "Bắt Đầu"
document.querySelectorAll('.btn-success').forEach(button => {
    button.addEventListener('click', function(event) {
        // Kiểm tra xem người dùng đã đăng nhập hay chưa
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            // Nếu đã đăng nhập, lấy tên đề từ class "card-title"
            var examName = this.closest('.khoa-hoc').querySelector('.card-title').textContent.trim();
            var doneExams = JSON.parse(localStorage.getItem('doneExams')) || []; // Lấy danh sách các đề đã làm từ localStorage, nếu chưa có thì mặc định là mảng trống
            // Kiểm tra xem tên đề đã tồn tại trong danh sách chưa trước khi thêm vào
            if (!doneExams.includes(examName)) {
                doneExams.push(examName); // Thêm tên đề vào mảng
                localStorage.setItem('doneExams', JSON.stringify(doneExams)); // Lưu lại danh sách các đề đã làm vào localStorage
            }
        } else {
            // Nếu chưa đăng nhập, hiển thị thông báo yêu cầu đăng nhập
            alert("Vui lòng đăng nhập để bắt đầu làm bài!");
            event.preventDefault();
            window.location.href = "/pages/Ex ENG/login.html";
        }
    });
});
