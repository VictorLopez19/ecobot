// Back to top button
window.addEventListener("scroll", function () {
    const backToTop = document.querySelector(".back-to-top");

    if (window.scrollY > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

document.querySelector(".back-to-top").addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});