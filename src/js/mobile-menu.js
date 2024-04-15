document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuOpenBtn = document.querySelector('.mobile-menu-open-btn');
  const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');

  mobileMenuOpenBtn.addEventListener('click', function () {
    mobileMenuWrapper.classList.toggle('is-open');
  });

  const dropdownLinks = document.querySelectorAll('.dropdown');

  dropdownLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (window.innerWidth > 768) {
        const dropdownContent = link.nextElementSibling;
        dropdownContent.classList.toggle('is-open');
      }
    });
  });

  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');

  mobileMenuCloseBtn.addEventListener('click', function () {
    mobileMenuWrapper.classList.remove('is-open');
  });
});
