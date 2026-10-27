import { gsap } from 'gsap';
import { isFinePointer, prefersReducedMotion } from './env';

/**
 * Hero:
 * 1) Animasi masuk per huruf. Nama TETAP terbaca sejak frame pertama
 *    (mulai dari opacity 0.15 dan sedikit bergeser, bukan dari tak terlihat).
 * 2) Blob + "lampu sorot" yang mengisi kata terakhir mengikuti mouse.
 *    Di perangkat sentuh: bergerak sendiri lewat animasi CSS (class hero--auto),
 *    jadi tidak ada kerja JS per frame di HP.
 * 3) Parallax halus untuk elemen [data-depth] (desktop saja).
 */
export function initHero() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero || prefersReducedMotion()) return;
  const fill = hero.querySelector<HTMLElement>('[data-spot-fill]');

  // ---- 1. Masuk ----
  const loaderShown = document.documentElement.dataset.loader === 'show';
  const tl = gsap.timeline({ delay: loaderShown ? 0.8 : 0.15, defaults: { ease: 'expo.out' } });
  tl.from(hero.querySelectorAll('.hero__line .char'), {
    yPercent: 35,
    rotate: 4,
    opacity: 0.15,
    duration: 1.1,
    stagger: 0.035,
  })
    .from(hero.querySelector('.hero__blob'), { scale: 0.6, opacity: 0, duration: 1.6 }, 0)
    .from(
      hero.querySelectorAll('.hero__photo'),
      { y: 40, opacity: 0, duration: 1.2, ease: 'expo.out' },
      0.4,
    );

  if (!isFinePointer()) {
    hero.classList.add('hero--auto');
    return;
  }

  // ---- 2 & 3. Interaksi pointer (desktop) ----
  const layers = [...hero.querySelectorAll<HTMLElement>('[data-depth]:not([data-spot])')].map((el) => ({
    x: gsap.quickSetter(el, 'x', 'px'),
    y: gsap.quickSetter(el, 'y', 'px'),
    d: Number(el.dataset.depth),
  }));
  // Ukuran di-cache — tidak membaca layout setiap frame
  let box = { w: 0, h: 0, fx: 0, fy: 0 };
  const measure = () => {
    const r = hero.getBoundingClientRect();
    const f = fill?.getBoundingClientRect();
    box = { w: r.width, h: r.height, fx: f ? f.left - r.left : 0, fy: f ? f.top - r.top : 0 };
  };
  measure();
  new ResizeObserver(measure).observe(hero);

  const state = { mx: 0.7, my: 0.72 };
  const render = () => {
    const px = state.mx * box.w;
    const py = state.my * box.h;
    hero.style.setProperty('--mx', `${px}px`);
    hero.style.setProperty('--my', `${py}px`);
    if (fill) {
      fill.style.setProperty('--fx', `${px - box.fx}px`);
      fill.style.setProperty('--fy', `${py - box.fy}px`);
    }
    for (const l of layers) {
      l.x((state.mx - 0.5) * 60 * l.d);
      l.y((state.my - 0.5) * 60 * l.d);
    }
  };
  const toX = gsap.quickTo(state, 'mx', { duration: 1.2, ease: 'power3', onUpdate: render });
  const toY = gsap.quickTo(state, 'my', { duration: 1.2, ease: 'power3', onUpdate: render });
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    toX((e.clientX - r.left) / r.width);
    toY((e.clientY - r.top) / r.height);
  });
  render();
}
