document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuOpenBtn = document.querySelector('.mobile-menu-open-btn');
  const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
  const body = document.querySelector('body');
  const links = document.querySelectorAll('.mobile-menu-wrapper a[href^="#"]');

  mobileMenuOpenBtn.addEventListener('click', function () {
    mobileMenuWrapper.classList.toggle('is-open');
    body.classList.toggle('modal-open');
    body.scrollIntoView();
  });

  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');

  mobileMenuCloseBtn.addEventListener('click', function () {
    mobileMenuWrapper.classList.remove('is-open');
    body.classList.toggle('modal-open');
  });

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      const href = event.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        event.preventDefault();
        mobileMenuWrapper.classList.remove('is-open');
        body.classList.remove('modal-open');

        const id = href.slice(1);
        const targetElement = document.getElementById(id);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    });
  });
});
const menuLinks = document.querySelectorAll('.submenu-link');
document.querySelector('.navbar-menu').addEventListener('click', function () {
  menuLinks.forEach(function (link, index) {
    setTimeout(function () {
      link.classList.toggle('is-active');
    }, 100 * index);
  });
});
