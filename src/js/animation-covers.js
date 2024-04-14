export const containerForCovers = document.getElementById('animation');

export function isInViewport(containerForCovers) {
  let rect = containerForCovers.getBoundingClientRect();
  console.log(123);
  return (
    (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
    (rect.bottom >= 0 && rect.top <= window.innerHeight)
  );
}

export function animateCovers() {
  let coversSection = document.querySelector('.covers.section');
  let marqueeLines = coversSection.querySelectorAll('.marquee-line');

  marqueeLines.forEach(function (line) {
    if (isInViewport(coversSection)) {
      line.classList.add('marquee-line-animation');
    } else {
      line.classList.remove('marquee-line-animation');
    }
  });
}

document.addEventListener('DOMContentLoaded', animateCovers);
window.addEventListener('scroll', animateCovers);
