const containerForCovers = document.getElementById('animation');

function isInViewport(containerForCovers) {
  let rect = containerForCovers.getBoundingClientRect();
  return (
    (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
    (rect.bottom >= 0 && rect.top <= window.innerHeight)
  );
}

function animateCovers() {
  let coversSection = document.querySelector('.covers.section');
  let marqueeLines = coversSection.querySelectorAll('.marquee-line');

  marqueeLines.forEach(function (line) {
    if (isInViewport(coversSection)) {
      line.classList.add('marquee-line-animation'); // Додати клас анімації
    } else {
      line.classList.remove('marquee-line-animation'); // Видалити клас анімації
    }
  });
}

document.addEventListener('DOMContentLoaded', animateCovers);
window.addEventListener('scroll', animateCovers);
