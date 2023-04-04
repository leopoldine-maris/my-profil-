window.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      const targetTop = targetSection.offsetTop;
      
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    });
  });
});

window.addEventListener('load', function() {
  var elements = document.querySelectorAll('.animate');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('animate');
  }
});