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



document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  if (anchor.getAttribute('href').length > 1) {
     anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  });
  }
 
});

