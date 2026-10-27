import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './env';
import { getLenis } from './smooth';

gsap.registerPlugin(ScrollTrigger);

/** Timeline: garis terisi mengikuti scroll, titik menyala saat dilewati. */
function initTimeline() {
  const tl = document.querySelector<HTMLElement>('[data-timeline]');
  if (!tl) return;
  const bar = tl.querySelector<HTMLElement>('[data-timeline-progress]');
  const items = [...tl.querySelectorAll<HTMLElement>('[data-tl-item]')];
  if (prefersReducedMotion()) {
    items.forEach((i) => i.classList.add('is-active'));
    return;
  }
  if (bar) {
    gsap.fromTo(bar, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: tl, start: 'top 60%', end: 'bottom 60%', scrub: 0.6 } });
  }
  items.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 62%',
      onEnter: () => item.classList.add('is-active'),
      onLeaveBack: () => item.classList.remove('is-active'),
    });
    gsap.from(item.querySelector('.tl-item__card'), {
      x: 40,
      rotationY: -28,
      transformPerspective: 1000,
      transformOrigin: '0% 50%',
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: { trigger: item, start: 'top 85%', once: true },
    });
  });
}

/** Chip skill "jatuh" dan memantul masuk; polaroid ditempel satu per satu. */
function initPlayful() {
  if (prefersReducedMotion()) return;
  document.querySelectorAll<HTMLElement>('[data-chips]').forEach((list) => {
    gsap.from(list.children, {
      y: -40,
      opacity: 0,
      rotate: () => gsap.utils.random(-25, 25),
      duration: 0.9,
      ease: 'back.out(2.2)',
      stagger: 0.06,
      clearProps: 'transform',
      scrollTrigger: { trigger: list, start: 'top 88%', once: true },
    });
  });
  const pol = document.querySelector<HTMLElement>('[data-polaroids]');
  if (pol) {
    gsap.from(pol.children, {
      y: 120,
      opacity: 0,
      rotate: (i: number) => (i % 2 ? 25 : -25),
      duration: 1.2,
      ease: 'expo.out',
      stagger: 0.12,
      clearProps: 'transform',
      scrollTrigger: { trigger: pol, start: 'top 85%', once: true },
    });
  }
}

/** Salin email ke clipboard dengan umpan balik. */
function initCopy() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy ?? '');
        btn.textContent = btn.dataset.copied ?? '';
        btn.classList.add('is-done');
        setTimeout(() => {
          btn.textContent = btn.dataset.label ?? '';
          btn.classList.remove('is-done');
        }, 2000);
      } catch {
        location.href = `mailto:${btn.dataset.copy}`;
      }
    });
  });
}

/** Form Web3Forms (opsional) — dikirim via fetch, tanpa pindah halaman. */
function initForm() {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form) return;
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (status) status.textContent = form.dataset.sending ?? '';
    if (btn) btn.disabled = true;
    try {
      const res = await fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
      const ok = res.ok && (await res.json()).success;
      if (status) status.textContent = (ok ? form.dataset.sent : form.dataset.error) ?? '';
      if (ok) form.reset();
    } catch {
      if (status) status.textContent = form.dataset.error ?? '';
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}

/** Jam lokal di footer (zona waktu dari content). */
let clockTimer: number | undefined;
function initClock() {
  const el = document.querySelector<HTMLTimeElement>('[data-clock]');
  window.clearInterval(clockTimer);
  if (!el) return;
  const fmt = new Intl.DateTimeFormat(el.dataset.lang === 'id' ? 'id-ID' : 'en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: el.dataset.tz,
  });
  const tick = () => (el.textContent = `${fmt.format(new Date())} ${el.dataset.tzLabel ?? ''}`.trim());
  tick();
  clockTimer = window.setInterval(tick, 15000);
}

function initTop() {
  document.querySelectorAll<HTMLAnchorElement>('[data-top]').forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(0, { duration: 1.6 });
      else window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
      document.getElementById('main')?.focus({ preventScroll: true });
    }),
  );
}

export function initSections() {
  initTimeline();
  initPlayful();
  initCopy();
  initForm();
  initClock();
  initTop();
}
