import { ui, type Lang, type L } from './content/site';

export const langs: Lang[] = ['en', 'id'];

/** Ambil teks sesuai bahasa dari objek { en, id }. */
export const tr = (value: L, lang: Lang) => value[lang];

export const useUi = (lang: Lang) => ui[lang];

/** Hapus prefix /id dari path → path "netral" bahasa Inggris. */
export function stripLang(pathname: string) {
  const p = pathname.replace(/^\/id(?=\/|$)/, '');
  return p === '' ? '/' : p;
}

/** Bangun URL untuk bahasa tertentu. "/work/x" → "/id/work/x". */
export function localize(path: string, lang: Lang) {
  const clean = stripLang(path);
  if (lang === 'en') return clean;
  return clean === '/' ? '/id/' : `/id${clean}`;
}
