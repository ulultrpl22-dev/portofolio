import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getLenis } from './smooth';

let escBound = false;

/** Navbar: sembunyi saat scroll ke bawah, muncul saat ke atas; menu HP; link aktif. */
export function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;

  // --- sembunyi/muncul ---
  let last = window.scrollY;
  const menuEl = nav.querySelector<HTMLElement>('[data-menu]');
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      const menuOpen = menuEl?.classList.contains('is-open');
      nav.classList.toggle('is-hidden', !menuOpen && y > 160 && y > last);
      last = y;
    },
    { passive: true },
  );

  // --- menu HP ---
  const btn = nav.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const label = btn?.querySelector<HTMLElement>('.nav__menu-label');
  const setOpen = (open: boolean) => {
    if (!btn || !menuEl) return;
    btn.setAttribute('aria-expanded', String(open));
    if (label) label.textContent = (open ? label.dataset.close : label.dataset.open) ?? '';
    if (open) {
      menuEl.hidden = false;
      requestAnimationFrame(() => requestAnimationFrame(() => menuEl.classList.add('is-open')));
      getLenis()?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      menuEl.classList.remove('is-open');
      getLenis()?.start();
      document.body.style.overflow = '';
      setTimeout(() => {
        if (!menuEl.classList.contains('is-open')) menuEl.hidden = true;
      }, 700);
    }
  };
  btn?.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  menuEl?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  if (!escBound) {
    escBound = true;
    document.addEventListener('keydown', (e) => {
      const b = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
      if (e.key === 'Escape' && b?.getAttribute('aria-expanded') === 'true') {
        b.click();
        b.focus();
      }
    });
  }

  // --- tandai section yang sedang dilihat ---
  nav.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach((a) => {
    const section = document.getElementById(a.dataset.navLink!);
    if (!section) return;
    ScrollTrigger.create({
      trigger: section,
      start: 'top 50%',
      end: 'bottom 50%',
      onToggle: (self) => {
        a.classList.toggle('is-current', self.isActive);
        if (self.isActive) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      },
    });
  });
}
