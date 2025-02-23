document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
      loop: false, 
      slidesPerView: "auto",
      centeredSlides: false,
      spaceBetween: 10,
      allowSlidePrev: true, 
      allowSlideNext: true, 
      autoplay: false,
      pagination: {
          el: ".swiper-pagination",
          clickable: true
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      }
  });
});

function startCounter(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const finalNumber = parseInt(target.getAttribute("data-target"));
      let current = 0;
      const increment = Math.ceil(finalNumber / 100);
      const duration = 3000;
      const intervalTime = duration / (finalNumber / increment);

      const counter = setInterval(() => {
        current += increment;
        if (current >= finalNumber) {
          target.innerText = finalNumber;
          clearInterval(counter);
        } else {
          target.innerText = current;
        }
      }, intervalTime);

      observer.unobserve(target);
    }
  });
}
const observer = new IntersectionObserver(startCounter, { threshold: 0.5 });
document.querySelectorAll(".numbers").forEach(number => observer.observe(number));