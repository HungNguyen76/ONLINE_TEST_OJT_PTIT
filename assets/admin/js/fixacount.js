document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function () {
        const searchText = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll('tbody tr');

        rows.forEach(row => {
            const name = row.querySelector('[data-id="name"]').textContent.toLowerCase();

            if (name.includes(searchText)) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sortButton = document.getElementById('sortButton');

    sortButton.addEventListener('click', function () {
        const rows = Array.from(document.querySelectorAll('tbody tr'));

        rows.sort((rowA, rowB) => {
            const nameA = rowA.querySelector('[data-id="name"]').textContent.toLowerCase();
            const nameB = rowB.querySelector('[data-id="name"]').textContent.toLowerCase();

            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });

        const tbody = document.querySelector('tbody');
        rows.forEach(row => tbody.appendChild(row));
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Lấy dữ liệu người dùng từ local storage
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Lặp qua mỗi người dùng và hiển thị thông tin của họ
    accounts.forEach(function(user, index) {
        // Tạo một hàng mới trong bảng
        const row = document.createElement('tr');

        // Thêm thông tin người dùng vào hàng
        row.innerHTML = `
            <td>${index + 1}</td>
            <td data-id="name"><span id="name">${user.name}</span></td>
            <td data-id="email"><span id="email">${user.email}</span></td>
            <td data-id="job"><span id="job">${user.job}</span></td>
            <td data-id="password"><span id="password">${user.password}</span></td>
            <td>
                <button class="btn btn-danger">Block</button>
                <button class="btn btn-warning">Unblock</button>
            </td>
        `;

        // Thêm hàng vào tbody của bảng
        const userInfoContainer = document.getElementById('user-info-container');
        if (userInfoContainer) {
            userInfoContainer.appendChild(row);
        } else {
            console.error("User info container element is null.");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const blockButtons = document.querySelectorAll('.btn-danger');
    const unblockButtons = document.querySelectorAll('.btn-warning');

    blockButtons.forEach(button => {
        button.addEventListener('click', function () {
            const row = button.parentElement.parentElement;
            const email = row.querySelector('[data-id="email"] span').textContent;

            // Xác nhận block tài khoản
            const confirmBlock = confirm(`Bạn có chắc chắn muốn block tài khoản có email ${email}?`);
            if (confirmBlock) {
                // Cập nhật trạng thái block trong localStorage
                localStorage.setItem(email, 'true');
            }
        });
    });

    unblockButtons.forEach(button => {
        button.addEventListener('click', function () {
            const row = button.parentElement.parentElement;
            const email = row.querySelector('[data-id="email"] span').textContent;

            // Xác nhận unblock tài khoản
            const confirmUnblock = confirm(`Bạn có chắc chắn muốn unblock tài khoản có email ${email}?`);
            if (confirmUnblock) {
                // Xóa key email khỏi localStorage
                localStorage.removeItem(email);
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const rowsPerPage = 5; // Số lượng mục hiển thị trên mỗi trang
    let currentPage = 1; // Trang hiện tại

    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    function showPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            if (index >= start && index < end) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // Hiển thị trang đầu tiên khi tải trang
    showPage(currentPage);

    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    prevPageButton.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextPageButton.addEventListener('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        } else {
            currentPage++;
            showPage(currentPage);
        }
    });
});
