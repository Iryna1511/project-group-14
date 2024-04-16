document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuOpenBtn = document.querySelector('.mobile-menu-open-btn');
  const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
  const body = document.querySelector('body');

  mobileMenuOpenBtn.addEventListener('click', function () {
    mobileMenuWrapper.classList.toggle('is-open');
    body.classList.toggle('modal-open');
  });

  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');

  mobileMenuCloseBtn.addEventListener('click', function () {
    mobileMenuWrapper.classList.remove('is-open');
    body.classList.toggle('modal-open');
  });
});
