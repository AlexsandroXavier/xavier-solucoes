const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links ul');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});