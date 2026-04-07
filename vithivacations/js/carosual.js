const track = document.getElementById('track');
const container = document.getElementById('trackContainer');
const dotsEl = document.getElementById('dots');
const thumbsEl = document.getElementById('thumbnails');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const total = track.children.length;
let current = 0;
let autoTimer;

const thumbUrls = [
  'https://thecoolestaircon.in/img/CoolestAirconACService.png',
  './img/split-ac-service.png',
  './img/inverter-ac1.png',
  './img/cassete-ac.png',
  './img/window-ac.png',
];

/* =========================
   BUILD DOTS
========================= */
for (let i = 0; i < total; i++) {
  const d = document.createElement('button');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.setAttribute('aria-label', `Slide ${i + 1}`);
  d.addEventListener('click', () => goTo(i));
  dotsEl.appendChild(d);
}

/* =========================
   BUILD THUMBNAILS
========================= */
thumbUrls.forEach((url, i) => {
  const t = document.createElement('div');
  t.className = 'thumb' + (i === 0 ? ' active' : '');
  t.style.backgroundImage = `url('${url}')`;
  t.setAttribute('aria-label', `Go to slide ${i + 1}`);
  t.addEventListener('click', () => goTo(i));
  thumbsEl.appendChild(t);
});

/* =========================
   UPDATE UI
========================= */
function updateUI() {
  track.style.transition =
    'transform 0.55s cubic-bezier(0.77, 0, 0.18, 1)';
  track.style.transform = `translateX(-${current * 100}%)`;

  document.querySelectorAll('.dot').forEach((d, i) =>
    d.classList.toggle('active', i === current)
  );

  document.querySelectorAll('.thumb').forEach((t, i) =>
    t.classList.toggle('active', i === current)
  );
}

/* =========================
   NAVIGATION
========================= */
function goTo(index) {
  current = (index + total) % total;
  updateUI();
  resetAuto();
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

/* =========================
   KEYBOARD
========================= */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') goTo(current - 1);
  if (e.key === 'ArrowRight') goTo(current + 1);
});

/* =========================
   DRAG / SWIPE SUPPORT
========================= */
let startX = 0;
let currentTranslate = 0;
let isDragging = false;
let dragOffset = 0;

container.addEventListener('pointerdown', e => {
  isDragging = true;
  startX = e.clientX;
  dragOffset = 0;

  currentTranslate = -current * container.offsetWidth;

  track.style.transition = 'none';
  container.setPointerCapture(e.pointerId);
});

container.addEventListener('pointermove', e => {
  if (!isDragging) return;

  dragOffset = e.clientX - startX;
  track.style.transform =
    `translateX(${currentTranslate + dragOffset}px)`;
});

container.addEventListener('pointerup', e => {
  if (!isDragging) return;

  container.releasePointerCapture(e.pointerId);
  isDragging = false;

  track.style.transition =
    'transform 0.55s cubic-bezier(0.77, 0, 0.18, 1)';

  const threshold = container.offsetWidth * 0.15;

  if (dragOffset < -threshold) {
    goTo(current + 1);
  } else if (dragOffset > threshold) {
    goTo(current - 1);
  } else {
    updateUI();
  }

  dragOffset = 0;
});

container.addEventListener('pointercancel', () => {
  isDragging = false;
  updateUI();
});

/* =========================
   AUTOPLAY
========================= */
function startAuto() {
  autoTimer = setInterval(() => {
    goTo(current + 1);
  }, 4500);
}

function resetAuto() {
  clearInterval(autoTimer);
  startAuto();
}

startAuto();

/* =========================
   RESIZE FIX
========================= */
window.addEventListener('resize', () => {
  updateUI();
});