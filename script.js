const particles = document.getElementById("particles");

function createParticle() {
  const p = document.createElement("span");
  p.className = "particle";

  const size = Math.random() * 4 + 2;
  const left = Math.random() * 100;
  const duration = Math.random() * 8 + 6;
  const delay = Math.random() * 6;

  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.left = `${left}vw`;
  p.style.bottom = `-20px`;
  p.style.animationDuration = `${duration}s`;
  p.style.animationDelay = `${delay}s`;
  p.style.opacity = `${Math.random() * 0.7 + 0.3}`;

  particles.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, (duration + delay) * 1000);
}

for (let i = 0; i < 60; i++) {
  createParticle();
}

setInterval(createParticle, 180);
