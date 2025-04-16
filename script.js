/* Slider Button Function */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("banner-slider-img");
    if (n > x.length) {
        slideIndex = 1;
    }
    else if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display="block";
}

function scrollonclick() {
    const section = document.querySelector('.item'); // Lấy phần tử đầu tiên có class 'item'
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth', // Cuộn mượt
            block: 'start' // Cuộn đến đầu phần tử
        });
    } else {
        console.error("Không tìm thấy phần tử với class 'item'");
    }
}

function transferscroll() {
    window.location.href = "index.html#item"; // Chuyển về trang chủ và thêm hash để cuộn đến phần tử
}

function transferscrollsp() {
    window.location.href = "../index.html#item"; // Chuyển về trang chủ và thêm hash để cuộn đến phần tử
}

// Ensure this logic is added to the target page (index.html) script
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash === "#item") {
        scrollonclick(); // Cuộn đến phần tử khi hash là #item
    }
});
