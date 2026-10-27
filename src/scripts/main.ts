import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmooth, bindAnchorLinks, getLenis, scrollToTarget } from './smooth';
import { initTheme } from './theme';
import { initNav } from './nav';
import { initHero } from './hero';
import { initScrollIn } from './scroll-in';

const idle = (fn: () => void) =>
  'requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 1200 }) : setTimeout(fn, 200);

let revert: (() => void) | undefined;

/** Dijalankan pada load pertama DAN setiap navigasi (Astro ClientRouter). */
function boot() {
  initSmooth();
  initTheme();
  initNav();
  initHero();
  initScrollIn();
  bindAnchorLinks();

  // Animasi di bawah layar dimuat terpisah saat browser senggang → JS awal lebih ringan di HP
  const page = document.body;
  idle(async () => {
    const [reveal, work, sections, marquee, magnetic] = await Promise.all([
      import('./reveal'),
      import('./work'),
      import('./sections'),
      import('./marquee'),
      import('./magnetic'),
    ]);
    if (page !== document.body) return; // halaman sudah berganti
    marquee.initMarquees();
    reveal.initReveals();
    revert = reveal.revertReveals;
    work.initWorkFilter();
    sections.initSections();
    magnetic.initMagnetic();
    ScrollTrigger.refresh();
  });

  // Loader: klik/tombol apa pun untuk melewati
  const d = document.documentElement;
  if (d.dataset.loader === 'show') {
    const skip = () => d.classList.add('loader-done');
    window.addEventListener('pointerdown', skip, { once: true });
    window.addEventListener('keydown', skip, { once: true });
    setTimeout(() => d.removeAttribute('data-loader'), 1300);
  }

  // Datang dari halaman lain ke "/#work" → langsung ke section
  if (location.hash) requestAnimationFrame(() => scrollToTarget(location.hash, true));
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

document.addEventListener('astro:page-load', boot);

// Bersihkan animasi milik halaman lama sebelum ditukar
document.addEventListener('astro:before-swap', () => {
  revert?.();
  ScrollTrigger.getAll().forEach((t) => t.kill());
  getLenis()?.scrollTo(0, { immediate: true });
});
