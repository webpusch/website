const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function formatNumber(value, suffix) {
  const rounded = Math.round(value);
  const formatted = rounded >= 1000 ? rounded.toLocaleString('de-DE') : String(rounded);
  return formatted + (suffix || '');
}

function runCountUp(el) {
  const target = Number(el.dataset.target || '0');
  const suffix = el.dataset.suffix || '';

  if (prefersReducedMotion) {
    el.textContent = formatNumber(target, suffix);
    return;
  }

  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out-cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatNumber(target * eased, suffix);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initRevealObserver() {
  const revealEls = document.querySelectorAll('[data-reveal]');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => {
      el.classList.add('is-visible');
      el.querySelectorAll('[data-countup]').forEach(runCountUp);
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('is-visible');
        el.querySelectorAll('[data-countup]').forEach(runCountUp);
        observer.unobserve(el);
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRevealObserver);
} else {
  initRevealObserver();
}
