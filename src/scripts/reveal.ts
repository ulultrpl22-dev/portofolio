import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { prefersReducedMotion } from './env';

gsap.registerPlugin(ScrollTrigger, SplitText);

const splits: SplitText[] = [];

/**
 * Animasi masuk saat scroll — konsisten di semua section:
 *  [data-reveal="lines"] → teks naik per baris dari balik "mask"
 *  [data-reveal="clip"]  → gambar/mockup terbuka dengan clip-path
 *  [data-reveal="fade"]  → naik pelan + muncul
 *  [data-parallax]       → gambar bergeser halus di dalam bingkainya
 * Tanpa JS / reduced motion: semua langsung terlihat apa adanya.
 */
export function initReveals(root: ParentNode = document) {
  if (prefersReducedMotion()) return;
  const start = 'top 86%';

  root.querySelectorAll<HTMLElement>('[data-reveal="lines"]').forEach((el) => {
    const split = SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'reveal-line',
      autoSplit: true,
      aria: 'none',
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          rotationX: -45,
          transformPerspective: 800,
          transformOrigin: '50% 0%',
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.08,
          scrollTrigger: { trigger: el, start, once: true },
        }),
    });
    splits.push(split);
  });

  root.querySelectorAll<HTMLElement>('[data-reveal="fade"]').forEach((el) => {
    gsap.from(el, {
      y: 32,
      rotationX: 30,
      transformPerspective: 900,
      transformOrigin: '50% 100%',
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start, once: true },
    });
  });

  root.querySelectorAll<HTMLElement>('[data-reveal="clip"]').forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: 'inset(14% 8% 14% 8% round 2.5rem)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 0rem)',
        duration: 1.4,
        ease: 'expo.out',
        clearProps: 'clipPath',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      },
    );
    const inner = el.querySelector('[data-reveal-inner]');
    if (inner) {
      gsap.from(inner, {
        scale: 1.12,
        duration: 1.6,
        ease: 'expo.out',
        clearProps: 'scale',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    }
  });

  root.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: { trigger: el.closest('[data-parallax-wrap]') ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });
}

/** Kembalikan teks ke bentuk asli sebelum pindah halaman. */
export function revertReveals() {
  splits.splice(0).forEach((s) => s.revert());
}
