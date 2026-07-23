const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const progress = document.querySelector('.scroll-progress');
const sections = [...document.querySelectorAll('main section[id]')];

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

navLinks.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// Reveal content only when it enters the reading area.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.nav-links a').forEach((link) => {
      const isActive = link.getAttribute('href') === `#${entry.target.id}`;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

document.querySelectorAll('[data-scroll-target]').forEach((button) => {
  button.addEventListener('click', () => document.querySelector(button.dataset.scrollTarget)?.scrollIntoView({ behavior: 'smooth' }));
});
document.querySelector('.back-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// A missing replacement image becomes a labelled placeholder rather than a broken image.
document.querySelectorAll('.asset-frame img').forEach((image) => {
  image.addEventListener('load', () => image.closest('.asset-frame').classList.add('has-image'));
  image.addEventListener('error', () => image.closest('.asset-frame').classList.remove('has-image'));
  if (image.complete && image.naturalWidth) image.closest('.asset-frame').classList.add('has-image');
});

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
let lightboxTrigger = null;
function openLightbox(frame) {
  const image = frame.querySelector('img');
  if (!image.naturalWidth) return;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  lightboxTrigger = frame;
  lightbox.focus();
}
document.querySelectorAll('.asset-frame').forEach((frame) => {
  const image = frame.querySelector('img');
  const syncAssetControl = () => {
    const available = Boolean(image.naturalWidth);
    frame.tabIndex = available ? 0 : -1;
    frame.setAttribute('aria-disabled', String(!available));
  };
  image.addEventListener('load', syncAssetControl);
  image.addEventListener('error', syncAssetControl);
  syncAssetControl();
  frame.setAttribute('role', 'button');
  frame.setAttribute('aria-label', `Open ${frame.dataset.asset} in full size`);
  frame.addEventListener('click', () => openLightbox(frame));
  frame.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox(frame);
    }
  });
});
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  lightboxTrigger?.focus();
}
lightbox.addEventListener('click', (event) => event.target === lightbox && closeLightbox());
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.addEventListener('keydown', (event) => event.key === 'Escape' && closeLightbox());
