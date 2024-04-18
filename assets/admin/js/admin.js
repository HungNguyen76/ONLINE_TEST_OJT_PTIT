function logoutButton() {
    // Hiển thị một hộp thoại xác nhận
    const confirmLogout = confirm("Bạn muốn thoát?");
    
    // Nếu người dùng nhấp vào "OK" trong hộp thoại xác nhận
    if (confirmLogout) {
        // Đặt lại giá trị trong isAdmin thành null
        localStorage.setItem('isAdmin', null);
        
        // Chuyển hướng người dùng về trang index.html
        window.location.href = "/pages/index.html";
    }
}
