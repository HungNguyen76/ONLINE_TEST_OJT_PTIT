document.addEventListener('DOMContentLoaded', function () {
    // Lấy dữ liệu từ local storage
    var exams = JSON.parse(localStorage.getItem('exams')) || [];

    // Lấy thẻ tbody
    var tbody = document.querySelector('tbody');

    // Xóa hết các dòng trong tbody
    tbody.innerHTML = '';

    // Duyệt qua mỗi đề trong local storage
    exams.forEach(function (exam, index) {
        // Tạo một dòng mới
        var row = document.createElement('tr');

        // Thêm STT vào cột đầu tiên
        var sttCell = document.createElement('td');
        sttCell.textContent = index + 1;
        row.appendChild(sttCell);

        // Thêm mã đề vào cột thứ hai
        var codeCell = document.createElement('td');
        codeCell.textContent = exam.title;

        row.appendChild(codeCell);

        // Thêm thời gian vào cột thứ ba
        var timeCell = document.createElement('td');
        timeCell.textContent = exam.time;
        row.appendChild(timeCell);

        // Thêm số câu hỏi vào cột thứ tư
        var questionCell = document.createElement('td');
        questionCell.textContent = exam.numQuestions;
        row.appendChild(questionCell);

        // Thêm tác giả vào cột thứ năm
        var authorCell = document.createElement('td');
        authorCell.textContent = exam.author;
        row.appendChild(authorCell);

        // Thêm nút Sửa và Xóa vào cột thứ sáu
        var actionCell = document.createElement('td');
        var editButton = document.createElement('button');
        editButton.textContent = 'Sửa';
        editButton.classList.add('btn', 'btn-warning');
        actionCell.appendChild(editButton);
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.classList.add('btn', 'btn-danger');
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        // Thêm dòng mới vào tbody
        tbody.appendChild(row);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Lấy dữ liệu từ local storage
    var exams = JSON.parse(localStorage.getItem('exams')) || [];

    // Lấy thẻ tbody
    var tbody = document.querySelector('tbody');

    // Xóa hết các dòng trong tbody
    tbody.innerHTML = '';

    // Render dữ liệu các đề
    renderExams(exams);

    // Sự kiện click cho nút "Sửa" và "Xóa"
    tbody.addEventListener('click', function (event) {
        var target = event.target;
        var rowIndex = target.closest('tr').rowIndex;
        var exam = exams[rowIndex - 1];

        if (target.tagName === 'BUTTON') {
            // Nếu là nút "Xóa"
            if (target.classList.contains('btn-danger')) {
                deleteRow(rowIndex - 1); // Gọi hàm xóa hàng khi nút "Xóa" được nhấn
            }
            // Nếu là nút "Sửa"
            else if (target.classList.contains('btn-warning')) {
                // Hiển thị prompt để người dùng nhập thông tin mới
                var newCode = prompt('Nhập mã đề mới:', exam.title);
                var newTime = prompt('Nhập thời gian mới:', exam.time);
                var newnumQuestions = prompt('Nhập số câu hỏi mới:', exam.numQuestions);
                var newAuthor = prompt('Nhập tác giả mới:', exam.author);

                // Kiểm tra xem người dùng đã nhập thông tin mới hay không
                // Nếu không nhập gì hoặc nhập chuỗi rỗng, giữ nguyên giá trị hiện tại
                if (newCode !== null && newCode.trim() !== '') {
                    exam.title = newCode;
                }
                if (newTime !== null && newTime.trim() !== '') {
                    exam.time = newTime;
                }
                if (newnumQuestions !== null && newnumQuestions.trim() !== '') {
                    exam.numQuestions = newnumQuestions;
                }
                if (newAuthor !== null && newAuthor.trim() !== '') {
                    exam.author = newAuthor;
                }

                // Cập nhật thông tin đề trong local storage
                exams[rowIndex - 1] = exam;

                // Lưu lại dữ liệu mới vào local storage
                localStorage.setItem('exams', JSON.stringify(exams));

                // Render lại dữ liệu các đề
                renderExams(exams);
            }
        }
    });

    // Hàm xóa hàng và cập nhật Local Storage
    function deleteRow(index) {
        exams.splice(index, 1); // Xóa hàng khỏi mảng
        localStorage.setItem('exams', JSON.stringify(exams)); // Cập nhật Local Storage
        renderExams(exams); // Render lại bảng sau khi xóa
    }

    // Hàm render dữ liệu các đề
    function renderExams(exams) {
        // Xóa hết các dòng trong tbody
        tbody.innerHTML = '';

        // Duyệt qua mỗi đề trong local storage
        exams.forEach(function (exam, index) {
            // Tạo một dòng mới
            var row = document.createElement('tr');

            // Thêm STT vào cột đầu tiên
            var sttCell = document.createElement('td');
            sttCell.textContent = index + 1;
            row.appendChild(sttCell);

            // Thêm mã đề vào cột thứ hai
            var codeCell = document.createElement('td');
            codeCell.textContent = exam.title;
            row.appendChild(codeCell);

            // Thêm thời gian vào cột thứ ba
            var timeCell = document.createElement('td');
            timeCell.textContent = exam.time;
            row.appendChild(timeCell);

            // Thêm số câu hỏi vào cột thứ tư
            var questionCell = document.createElement('td');
            questionCell.textContent = exam.numQuestions;
            row.appendChild(questionCell);

            // Thêm tác giả vào cột thứ năm
            var authorCell = document.createElement('td');
            authorCell.textContent = exam.author;
            row.appendChild(authorCell);

            // Thêm nút Sửa và Xóa vào cột thứ sáu
            var actionCell = document.createElement('td');
            var editButton = document.createElement('button');
            editButton.textContent = 'Sửa';
            editButton.classList.add('btn', 'btn-warning');
            actionCell.appendChild(editButton);
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Xóa';
            deleteButton.classList.add('btn', 'btn-danger');
            actionCell.appendChild(deleteButton);
            row.appendChild(actionCell);

            // Thêm dòng mới vào tbody
            tbody.appendChild(row);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function () {
        const searchText = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll('tbody tr');

        rows.forEach(row => {
            // Lấy nội dung của cột thứ hai (chứa exam.title) trong mỗi hàng
            const titleCell = row.cells[1]; // cells[1] tương ứng với cột thứ hai trong hàng
            const title = titleCell.textContent.toLowerCase();

            if (title.includes(searchText)) {
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
        var exams = JSON.parse(localStorage.getItem('exams')) || [];

        // Sắp xếp mảng exams theo exam.title
        exams.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        });

        // Lấy thẻ tbody
        var tbody = document.querySelector('tbody');

        // Xóa hết các dòng trong tbody
        tbody.innerHTML = '';

        // Duyệt qua mỗi đề trong local storage
        exams.forEach(function (exam, index) {
            // Tạo một dòng mới
            var row = document.createElement('tr');

            // Thêm STT vào cột đầu tiên
            var sttCell = document.createElement('td');
            sttCell.textContent = index + 1;
            row.appendChild(sttCell);

            // Thêm mã đề vào cột thứ hai
            var codeCell = document.createElement('td');
            codeCell.textContent = exam.title;
            row.appendChild(codeCell);

            // Thêm thời gian vào cột thứ ba
            var timeCell = document.createElement('td');
            timeCell.textContent = exam.time;
            row.appendChild(timeCell);

            // Thêm số câu hỏi vào cột thứ tư
            var questionCell = document.createElement('td');
            questionCell.textContent = exam.numQuestions;
            row.appendChild(questionCell);

            // Thêm tác giả vào cột thứ năm
            var authorCell = document.createElement('td');
            authorCell.textContent = exam.author;
            row.appendChild(authorCell);

            // Thêm nút Sửa và Xóa vào cột thứ sáu
            var actionCell = document.createElement('td');
            var editButton = document.createElement('button');
            editButton.textContent = 'Sửa';
            editButton.classList.add('btn', 'btn-warning');
            actionCell.appendChild(editButton);
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Xóa';
            deleteButton.classList.add('btn', 'btn-danger');
            actionCell.appendChild(deleteButton);
            row.appendChild(actionCell);

            // Thêm dòng mới vào tbody
            tbody.appendChild(row);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var exams = JSON.parse(localStorage.getItem('exams')) || [];
    var tbody = document.querySelector('tbody');
    var currentPage = 1;
    var rowsPerPage = 5; // Số hàng mỗi trang, bạn có thể thay đổi giá trị này

    var totalPages = Math.ceil(exams.length / rowsPerPage); // Tính tổng số trang

    function displayPage(page) {
        tbody.innerHTML = '';
        var startRow = (page - 1) * rowsPerPage;
        var endRow = Math.min(startRow + rowsPerPage, exams.length);
        var paginatedItems = exams.slice(startRow, endRow);

        paginatedItems.forEach(function (exam, index) {
            var row = document.createElement('tr');

            // Thêm STT vào cột đầu tiên
            var sttCell = document.createElement('td');
            sttCell.textContent = startRow + index + 1;
            row.appendChild(sttCell);

            // Thêm mã đề vào cột thứ hai
            var codeCell = document.createElement('td');
            codeCell.textContent = exam.title;
            row.appendChild(codeCell);

            // Thêm thời gian vào cột thứ ba
            var timeCell = document.createElement('td');
            timeCell.textContent = exam.time;
            row.appendChild(timeCell);

            // Thêm số câu hỏi vào cột thứ tư
            var questionCell = document.createElement('td');
            questionCell.textContent = exam.numQuestions;
            row.appendChild(questionCell);

            // Thêm tác giả vào cột thứ năm
            var authorCell = document.createElement('td');
            authorCell.textContent = exam.author;
            row.appendChild(authorCell);

            // Thêm nút Sửa và Xóa vào cột thứ sáu
            var actionCell = document.createElement('td');
            var editButton = document.createElement('button');
            editButton.textContent = 'Sửa';
            editButton.classList.add('btn', 'btn-warning');
            actionCell.appendChild(editButton);
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Xóa';
            deleteButton.classList.add('btn', 'btn-danger');
            actionCell.appendChild(deleteButton);
            row.appendChild(actionCell);

            // Thêm dòng mới vào tbody
            tbody.appendChild(row);
        });
    }

    displayPage(currentPage);

    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    prevPageButton.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
        }
    });

    nextPageButton.addEventListener('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
        }
    });
});
