// Active menu highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if(window.pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current) link.classList.add('active');
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if(window.scrollY > 300) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});

// Back to top click
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});

// Fade-in sections and skill animation
const skillSpans = document.querySelectorAll('.skill-list span');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});
const typingText = ["BCA Graduate", "Web Developer", "AI Enthusiast"];
let tIndex = 0;
let charIndex = 0;

function type() {
  const element = document.querySelector(".typing");
  if (tIndex >= typingText.length) tIndex = 0;
  const current = typingText[tIndex];
  element.textContent = current.slice(0, charIndex + 1);
  charIndex++;
  if (charIndex === current.length) {
    charIndex = 0;
    tIndex++;
    setTimeout(type, 1000); // pause 1s after word
    return;
  }
  setTimeout(type, 120);
}

type();