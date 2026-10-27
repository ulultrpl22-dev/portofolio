import { gsap } from 'gsap';
import { isFinePointer, prefersReducedMotion } from './env';

let started = false;

/**
 * Kursor kustom: lingkaran kecil yang membesar di atas link/tombol,
 * dan menampilkan label (mis. "View") di atas elemen dengan data-cursor-label.
 */
export function initCursor() {
  const root = document.documentElement;
  if (!isFinePointer() || prefersReducedMotion()) return;
  root.classList.add('has-cursor');
  if (started) return;
  started = true;

  const el = document.querySelector<HTMLElement>('.cursor');
  const label = el?.querySelector<HTMLElement>('.cursor__label');
  if (!el || !label) return;

  const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' });
  const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' });
  gsap.set(el, { x: -100, y: -100 });

  window.addEventListener('pointermove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
    const t = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor-label], a, button, [data-cursor]');
    const text = t?.dataset.cursorLabel;
    root.classList.toggle('cursor-label', !!text);
    root.classList.toggle('cursor-hover', !!t && !text);
    if (text) label.textContent = text;
  }, { passive: true });
  window.addEventListener('pointerdown', () => root.classList.add('cursor-down'));
  window.addEventListener('pointerup', () => root.classList.remove('cursor-down'));
  document.addEventListener('pointerleave', () => gsap.to(el, { opacity: 0, duration: 0.2 }));
  document.addEventListener('pointerenter', () => gsap.to(el, { opacity: 1, duration: 0.2 }));
}
