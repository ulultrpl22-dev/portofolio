import { prefersReducedMotion } from './env';

type Theme = 'light' | 'dark';
const root = document.documentElement;

function syncLabels() {
  const dark = root.dataset.theme === 'dark';
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((b) => {
    b.setAttribute('aria-label', (dark ? b.dataset.labelLight : b.dataset.labelDark) ?? '');
  });
  document.querySelector('meta[name="theme-color"]:not([media])')?.remove();
  const meta = document.createElement('meta');
  meta.name = 'theme-color';
  meta.content = dark ? '#0a1120' : '#eef2f8';
  document.head.append(meta);
}

function apply(theme: Theme) {
  root.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch {}
  syncLabels();
}

/** Toggle dark/light dengan transisi "tirai melingkar" dari tombol (View Transitions API). */
export function initTheme() {
  syncLabels();
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next: Theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
      if (!doc.startViewTransition || prefersReducedMotion()) return apply(next);

      const r = btn.getBoundingClientRect();
      const x = r.left + r.width / 2;
      const y = r.top + r.height / 2;
      const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      root.classList.add('theme-switching');
      const vt = doc.startViewTransition(() => apply(next));
      vt.ready.then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
          { duration: 650, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' },
        );
      });
      (vt as unknown as { finished: Promise<void> }).finished.finally(() => root.classList.remove('theme-switching'));
    });
  });
}
