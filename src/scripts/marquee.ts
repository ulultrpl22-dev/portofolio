import { gsap } from 'gsap';
import { prefersReducedMotion } from './env';
import { getLenis } from './smooth';

/** Marquee berjalan pelan; berbalik arah & sedikit ngebut mengikuti scroll. */
export function initMarquees(root: ParentNode = document) {
  if (prefersReducedMotion()) return;
  const tweens: gsap.core.Tween[] = [];
  root.querySelectorAll<HTMLElement>('[data-marquee-track]').forEach((track) => {
    const tween = gsap.to(track, { xPercent: -50, ease: 'none', duration: 40, repeat: -1 });
    tweens.push(tween);
    // Hemat baterai: berhenti saat tidak terlihat
    new IntersectionObserver(([e]) => (e.isIntersecting ? tween.resume() : tween.pause())).observe(track);
  });
  if (!tweens.length) return;

  let dir = 1;
  const onScroll = ({ velocity }: { velocity: number }) => {
    if (!tweens[0].isActive() && tweens[0].paused()) return;
    if (Math.abs(velocity) > 0.5) dir = velocity > 0 ? 1 : -1;
    const boost = 1 + Math.min(Math.abs(velocity) / 8, 3);
    tweens.forEach((t) => gsap.to(t, { timeScale: dir * boost, duration: 0.4, overwrite: true }));
  };
  const lenis = getLenis();
  lenis?.on('scroll', onScroll);
  // Lepas listener saat pindah halaman
  document.addEventListener('astro:before-swap', () => lenis?.off('scroll', onScroll), { once: true });
}
