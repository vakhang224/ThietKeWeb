document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".Danhmuc button");

    // Lấy trạng thái nút được lưu trong localStorage
    const activeButton = localStorage.getItem("activeButton");

    // Nếu có nút được lưu, thêm lớp 'active' vào nút đó
    if (activeButton) {
        const button = document.querySelector(`.Danhmuc button[data-id="${activeButton}"]`);
        if (button) {
            button.classList.add("active");
        }
    }

    // Lấy URL hiện tại
    const currentPage = window.location.pathname.split("/").pop();

    // Thêm lớp 'active' vào nút tương ứng với trang hiện tại
    buttons.forEach((button) => {
        const buttonLink = button.closest("a")?.getAttribute("href");
        if (buttonLink && buttonLink === currentPage) {
            button.classList.add("active");
        }
    });

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Xóa lớp 'active' khỏi tất cả các nút
            buttons.forEach((btn) => btn.classList.remove("active"));

            // Thêm lớp 'active' vào nút được nhấn
            button.classList.add("active");

            // Lưu trạng thái nút được nhấn vào localStorage
            const buttonId = button.getAttribute("data-id");
            localStorage.setItem("activeButton", buttonId);
        });
    });
});