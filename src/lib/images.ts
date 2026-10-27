import type { ImageMetadata } from 'astro';

/** Semua gambar di src/assets — dioptimasi otomatis (WebP/AVIF, ukuran tetap → tanpa layout shift). */
const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpg,jpeg,png,webp,avif}', { eager: true });

/** 'projects/erp-aguna/cover.png' → ImageMetadata, atau undefined jika file belum ada. */
export function asset(path?: string) {
  if (!path) return undefined;
  return files[`/src/assets/${path.replace(/^\/+/, '')}`]?.default;
}
