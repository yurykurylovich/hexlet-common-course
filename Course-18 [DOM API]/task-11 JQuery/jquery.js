/* carousel.js
Write a function that makes a working picture carousel (slider) on bootstrap's styles.
*/

///// JS PART REALIZATION without JQuery
const controls = document.querySelectorAll("[data-slide]");
controls.forEach((pointer) => {
  pointer.addEventListener("click", () => {
    const carousel = pointer.closest(".carousel");
    const innerCarousel = carousel.querySelector(".carousel-inner");
    const currActItem = innerCarousel.querySelector(".active");
    const direction = pointer.dataset.slide;
    const newActiveItem =
      direction === "prev"
        ? currActItem.previousElementSibling || innerCarousel.lastElementChild
        : currActItem.nextElementSibling || innerCarousel.firstElementChild;
    currActItem.classList.remove("active");
    newActiveItem.classList.add("active");
  });
});

///// TEACHERS SOLUTION
import $ from "jquery";

const carousels = $('[data-ride="carousel"]');
carousels.each((_index, carousel) => {
  const root = $(carousel);
  const slides = root.find('.carousel-item');
  const maxIndex = slides.length - 1;

  const handlerGenerator = (next) => () => {
    const currentIndex = slides.filter('.active').index();
    const newCurrentIndex = next(currentIndex);
    slides.removeClass('active');
    slides.filter((id) => id === newCurrentIndex).addClass('active');
  };

  const prev = root.find('[data-slide="prev"]');
  prev.click(handlerGenerator((i) => (i === 0 ? maxIndex : i - 1)));
  const next = root.find('[data-slide="next"]');
  next.click(handlerGenerator((i) => (maxIndex === i ? 0 : i + 1)));
});
