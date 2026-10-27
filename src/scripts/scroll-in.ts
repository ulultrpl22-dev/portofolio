import { prefersReducedMotion } from './env';

/**
 * Animasi masuk saat scroll yang ringan: tanpa GSAP, tanpa kerja per frame.
 * Elemen [data-stagger] → anak-anaknya muncul berurutan saat grup terlihat.
 * Elemen [data-rise]    → elemen itu sendiri naik + muncul.
 * CSS-nya ada di global.css (transisi transform/opacity saja → murah untuk GPU).
 */
let io: IntersectionObserver | null = null;

export function initScrollIn(root: ParentNode = document) {
  const els = root.querySelectorAll<HTMLElement>('[data-stagger], [data-rise]');
  if (!els.length) return;
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  document.documentElement.classList.add('si');
  io?.disconnect();
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        // urutan hanya untuk anak yang tampil (filter/tab bisa menyembunyikan sebagian)
        let i = 0;
        [...el.children].forEach((c) => {
          if ((c as HTMLElement).hidden) return;
          (c as HTMLElement).style.setProperty('--i', String(Math.min(i++, 10)));
        });
        el.classList.add('is-in');
        io?.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  );
  els.forEach((el) => io!.observe(el));
}
