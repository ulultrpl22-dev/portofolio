import type Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './env';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll memakai bawaan browser (lebih ringan & responsif daripada smooth-scroll JS).
 * `lenis` tetap ada sebagai null supaya pemanggil lama tidak perlu diubah.
 */
const lenis = null as Lenis | null;

export function initSmooth() {
  return lenis;
}

export const getLenis = () => lenis;

/** Scroll halus ke elemen/hash, menghormati reduced-motion. */
export function scrollToTarget(target: string | HTMLElement, immediate = false) {
  const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -16, immediate, duration: 1.4 });
  else el.scrollIntoView({ behavior: immediate || prefersReducedMotion() ? 'auto' : 'smooth' });
  // Pindahkan fokus untuk pengguna keyboard / screen reader
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}

/** Klik link "#id" atau "/#id" di halaman yang sama → scroll halus. */
export function bindAnchorLinks(root: ParentNode = document) {
  root.querySelectorAll<HTMLAnchorElement>('a[href*="#"]:not([data-top])').forEach((a) => {
    a.addEventListener('click', (e) => {
      const url = new URL(a.href, location.href);
      if (url.pathname.replace(/\/$/, '') !== location.pathname.replace(/\/$/, '') || !url.hash) return;
      const target = document.querySelector<HTMLElement>(url.hash);
      if (!target) return;
      e.preventDefault();
      history.pushState(null, '', url.hash);
      scrollToTarget(target);
    });
  });
}
