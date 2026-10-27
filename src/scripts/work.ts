import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './env';

/** Filter proyek berdasarkan tag teknologi (tombol dengan aria-pressed). */
export function initWorkFilter() {
  const group = document.querySelector<HTMLElement>('[data-filter]');
  if (!group) return;
  const items = [...document.querySelectorAll<HTMLElement>('[data-work-item]')];
  const list = items[0]?.parentElement;
  const status = document.querySelector<HTMLElement>('[data-filter-status]');
  const reduce = prefersReducedMotion();

  const apply = (tag: string) => {
    let n = 0;
    items.forEach((it) => {
      const show = tag === '*' || (it.dataset.tags ?? '').split(' ').includes(tag);
      it.classList.toggle('is-hidden', !show);
      if (show) n++;
    });
    if (status) status.textContent = (status.dataset.template ?? '').replace('{n}', String(n));
    ScrollTrigger.refresh();
  };

  // Tilt 3D + sorotan mengikuti pointer di kartu proyek (mouse saja)
  if (!reduce && matchMedia('(hover: hover) and (pointer: fine)').matches && list) {
    list.addEventListener('pointermove', (e) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.work-item__link');
      if (!card) return;
      const b = card.getBoundingClientRect();
      const x = (e.clientX - b.left) / b.width;
      const y = (e.clientY - b.top) / b.height;
      card.style.setProperty('--rx', `${(0.5 - y) * 5}deg`);
      card.style.setProperty('--ry', `${(x - 0.5) * 6}deg`);
      card.style.setProperty('--gx', `${x * 100}%`);
      card.style.setProperty('--gy', `${y * 100}%`);
    });
    list.addEventListener('pointerout', (e) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.work-item__link');
      if (card && !card.contains(e.relatedTarget as Node)) {
        card.style.removeProperty('--rx');
        card.style.removeProperty('--ry');
      }
    });
  }

  group.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-filter-tag]');
    if (!btn || btn.getAttribute('aria-pressed') === 'true') return;
    group.querySelectorAll('[data-filter-tag]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    const tag = btn.dataset.filterTag ?? '*';
    if (reduce || !list) return apply(tag);
    gsap.to(list, {
      opacity: 0,
      y: 24,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        apply(tag);
        gsap.fromTo(list, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' });
      },
    });
  });
}
