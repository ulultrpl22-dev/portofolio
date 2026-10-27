# Portofolio — Ulul Nurona Bhakti

Website portofolio pribadi bergaya editorial ("Midnight Blueprint"), dua bahasa (EN/ID), dengan mode gelap/terang.

**Stack:** [Astro](https://astro.build) (HTML statis) · [GSAP](https://gsap.com) + ScrollTrigger + SplitText (animasi) · [Lenis](https://lenis.darkroom.engineering) (smooth scroll). Tanpa backend, tanpa analytics/pelacak.

---

## Daftar isi

1. [Menjalankan di komputer](#1-menjalankan-di-komputer)
2. [Mengganti konten](#2-mengganti-konten)
3. [Menambah proyek baru](#3-menambah-proyek-baru)
4. [Foto & screenshot](#4-foto--screenshot)
5. [Bahasa](#5-bahasa)
6. [Warna & font](#6-warna--font)
7. [Form kontak (opsional)](#7-form-kontak-opsional)
8. [Deploy (gratis)](#8-deploy-gratis)
9. [Checklist sebelum dibagikan](#9-checklist-sebelum-dibagikan)
10. [Struktur folder](#10-struktur-folder)

---

## 1. Menjalankan di komputer

Butuh **Node.js 22.12 atau lebih baru** ([unduh](https://nodejs.org)). Cek dengan `node -v`.

```bash
cd D:\portfolio-ulul
npm install          # sekali saja
npm run dev          # buka http://localhost:4321 — otomatis refresh saat file diubah
```

Perintah lain:

| Perintah | Fungsi |
|---|---|
| `npm run build` | Membuat versi final ke folder `dist/` |
| `npm run preview` | Melihat hasil build sebelum deploy |

Halaman `/styleguide` menampilkan seluruh design system (warna, tipografi, tombol). Halaman ini tidak diindeks Google.

---

## 2. Mengganti konten

**Semua teks ada di satu file: [`src/content/site.ts`](src/content/site.ts).** Komponen lain tidak perlu disentuh.

- Teks dua bahasa ditulis sebagai `{ en: 'English', id: 'Indonesia' }`.
- **Cari `[ISI:`** (Ctrl+F) untuk menemukan semua bagian yang masih harus kamu lengkapi.

| Bagian di `site.ts` | Isinya |
|---|---|
| `site` | Nama, domain, email, GitHub, LinkedIn, WhatsApp, zona waktu, tanggal "terakhir diperbarui" |
| `ui` | Teks antarmuka: navbar, hero, judul section, label tombol, footer |
| `about` | Paragraf "Tentang" dan stiker di foto |
| `projects` | Daftar proyek dan isi halaman studi kasus |
| `experience` | Timeline pengalaman (urut dari terbaru) |
| `skills` | Kelompok skill (tanpa persentase) |
| `beyond` | Kartu polaroid "Di luar kode" |

**Tips menulis poin pengalaman:** pakai pola *"Membangun X sehingga Y"*, bukan daftar tugas. Tulis angka hanya kalau kamu yakin angkanya benar.

**Nomor WhatsApp** ditulis dalam format internasional tanpa `+` atau spasi, contoh `6281234567890`.

**CV:** taruh file di `public/files/cv.pdf` dengan nama persis seperti itu.

---

## 3. Menambah proyek baru

1. Buka `src/content/site.ts`, lalu cari `export const projects`.
2. Salin satu blok `{ ... }` proyek yang sudah ada, tempel di posisi yang kamu mau (urutan di file = urutan di website).
3. Ubah isinya:

```ts
{
  slug: 'nama-proyek',          // unik, huruf kecil-dan-strip → jadi URL /work/nama-proyek
  featured: true,               // false = tidak tampil di beranda
  year: '2026',
  tags: ['Laravel', 'React'],   // dipakai untuk tombol filter
  frame: 'browser',             // 'browser' | 'phone' | 'dual' (browser + HP)
  mock: 'dashboard',            // ilustrasi sementara: 'dashboard' | 'mobile' | 'calendar' | 'site' | 'list'
  cover: 'projects/nama-proyek/cover.png',
  coverMobile: 'projects/nama-proyek/mobile.png',   // opsional, untuk frame 'phone' / 'dual'
  title:   { en: '...', id: '...' },
  client:  { en: '...', id: '...' },
  summary: { en: '...', id: '...' },
  problem: { en: '...', id: '...' },
  role:    { en: '...', id: '...' },
  process: [{ en: '...', id: '...' }],
  solution:{ en: '...', id: '...' },
  stack: ['Laravel 12', 'MySQL'],
  impact: [{ en: '...', id: '...' }],
  gallery: [{ src: 'projects/nama-proyek/01.png', caption: { en: '...', id: '...' } }],
  links: { demo: 'https://...', repo: 'https://github.com/...' },  // boleh kosong: {}
},
```

4. Simpan. Halaman `/work/nama-proyek` dan `/id/work/nama-proyek` dibuat otomatis, dan tombol filter ikut bertambah.

---

## 4. Foto & screenshot

Semua gambar ditaruh di **`src/assets/`**. Astro otomatis mengubahnya ke WebP/AVIF, membuat beberapa ukuran, memasang lazy-load, dan mengunci dimensinya agar tidak ada layout shift.

| Gambar | Lokasi | Catatan |
|---|---|---|
| Foto profil | `src/assets/profile.jpg` | Potret, rasio ±4:5 |
| Screenshot proyek | `src/assets/projects/<slug>/...` | Tulis path-nya di `cover` / `gallery`. Screenshot halaman panjang akan "scroll" saat di-hover |
| Sertifikat (galeri Pencapaian) | `src/assets/certs/...` | Daftarnya di `certificates` pada `site.ts`; `star: true` = disorot |
| Foto kegiatan | `src/assets/beyond/...` | Nama file sesuai `photo` di `beyond`: `mc-poljam-mart.jpg`, `mc-mubes.jpg`, `poljam-campaign.jpg`, `himapel.jpg` |

Selama file belum ada, website tetap jalan: foto profil diganti monogram "UNB", screenshot diganti ilustrasi antarmuka, dan foto kegiatan diganti emoji.

Format yang didukung: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`. Ukuran ideal untuk screenshot desktop adalah lebar 1600–2000px.

**Gambar preview link (Open Graph)** ada di `public/og/og-en.png` dan `og-id.png` (1200×630). Sumbernya `og-src/og.html`. Untuk membuat ulang:
1. Edit `og-src/og.html`, lalu buka di Chrome.
2. Buka DevTools (F12), aktifkan mode device (Ctrl+Shift+M), dan atur ukuran 1200×630.
3. Pilih menu ⋮ → *Capture screenshot*, lalu simpan ke `public/og/`.

---

## 5. Bahasa

- **Bahasa Inggris** ada di `/` dan **Bahasa Indonesia** di `/id/`. Halaman studi kasus mengikuti pola yang sama: `/work/...` dan `/id/work/...`.
- Toggle EN/ID di navbar membuka halaman yang sama dalam bahasa lain.
- Mengubah teks: edit nilai `en` / `id` di `site.ts`.
- **Menjadikan Bahasa Indonesia default di `/`** tidak bisa dilakukan dengan mengubah satu baris saja. Routing perlu diubah di tiga tempat sekaligus: `defaultLocale` di `astro.config.mjs`, folder `src/pages/id/` → `src/pages/en/`, dan fungsi `localize()`/`stripLang()` di `src/i18n.ts`. Kerjakan di branch terpisah dan cek semua link dengan `npm run dev`.

---

## 6. Warna & font

**Warna** diatur di [`src/styles/tokens.css`](src/styles/tokens.css):

- `:root { ... }` → mode terang
- `:root[data-theme='dark'] { ... }` → mode gelap ("Midnight")

| Token | Dipakai untuk |
|---|---|
| `--bg`, `--bg-2`, `--surface` | Latar, layer belakang, kartu |
| `--ink`, `--ink-2`, `--ink-3` | Teks utama, teks isi, caption |
| `--accent` | Tombol utama, teks aksen (*Nurona*, judul italic) |
| `--accent-deco`, `--accent-soft` | Blob, glow, highlight |
| `--on-accent` | Teks di atas tombol aksen |

> Setelah mengganti warna, cek kontrasnya (misalnya di [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)). Teks biasa butuh rasio minimal **4.5:1**.

Beberapa warna tetap juga ditulis langsung di file berikut, jadi ikut diganti kalau palet berubah total:
- `src/components/Loader.astro`
- `public/favicon.svg`
- `og-src/og.html`
- dua `theme-color` di `src/layouts/Base.astro` dan `src/scripts/theme.ts`

**Mode default** saat pengunjung pertama datang adalah gelap. Untuk mengikuti setelan perangkat pengunjung, ubah baris berikut di `src/layouts/Base.astro`:

```js
if (theme !== 'light' && theme !== 'dark') theme = 'dark';
// ganti menjadi:
if (theme !== 'light' && theme !== 'dark') theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
```

**Font:** Fraunces (judul) dan General Sans (teks) disimpan lokal di `public/fonts/` dan didaftarkan di bagian atas `tokens.css`.

---

## 7. Form kontak (opsional)

Secara default, bagian Kontak hanya menampilkan email, WhatsApp, LinkedIn, GitHub, dan CV. Untuk menambahkan form:

1. Daftar gratis di [web3forms.com](https://web3forms.com) memakai email kamu, lalu salin **Access Key**.
2. Tempel key-nya di `site.ts`: `web3formsKey: 'xxxxxxxx-....'`.
3. Form langsung muncul. Pesan yang masuk dikirim ke email kamu, tanpa perlu backend.

---

## 8. Deploy (gratis)

### Langkah 0: Simpan proyek ke GitHub

1. Buat repository baru di [github.com/new](https://github.com/new), misalnya `portfolio`. Jangan centang "Add README".
2. Di terminal, jalankan:

```bash
cd D:\portfolio-ulul
git init
git add .
git commit -m "Portfolio pertama"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

### Opsi A: Vercel (disarankan)

1. Login ke [vercel.com](https://vercel.com) memakai akun GitHub.
2. Klik **Add New… → Project**, lalu pilih repo `portfolio` dan klik **Import**.
3. Vercel otomatis mendeteksi Astro. Biarkan pengaturannya (Build: `npm run build`, Output: `dist`).
4. Klik **Deploy** dan tunggu ±1 menit. Kamu akan mendapat URL seperti `portfolio-xxx.vercel.app`.
5. **Penting:** salin URL final itu ke `site.url` di `site.ts`, lalu commit dan push. Langkah ini membuat sitemap, Open Graph, dan preview link LinkedIn/WA memakai domain yang benar.

Setiap kali kamu `git push`, Vercel otomatis memperbarui website.

### Opsi B: Netlify

1. Login ke [app.netlify.com](https://app.netlify.com) memakai GitHub.
2. Pilih **Add new site → Import an existing project → GitHub**, lalu pilih repo-nya.
3. Isi Build command `npm run build` dan Publish directory `dist`, lalu klik **Deploy**.
4. Perbarui `site.url` seperti langkah 5 di atas.

### Opsi C: GitHub Pages

1. Di repo GitHub, buka **Settings → Pages → Source: GitHub Actions**.
2. Buat file `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3. Kalau URL-nya berbentuk `username.github.io/portfolio` (bukan domain sendiri), tambahkan `base: '/portfolio'` di `astro.config.mjs`. Untuk kebutuhan ini, Vercel atau Netlify lebih praktis.

### Domain sendiri (opsional)

Di Vercel, buka **Project → Settings → Domains → Add**, lalu ikuti instruksi DNS dari penyedia domain kamu. Setelah itu, perbarui `site.url`.

---

## 9. Checklist sebelum dibagikan

- [ ] Tidak ada lagi `[ISI:` di `src/content/site.ts`
- [ ] `email`, `github`, `linkedin`, `whatsapp` sudah benar
- [ ] `public/files/cv.pdf` ada
- [ ] `src/assets/profile.jpg` ada
- [ ] `site.url` sudah diganti ke domain final
- [ ] `lastUpdated` di `site.ts` diperbarui
- [ ] Preview link sudah dicek di [opengraph.xyz](https://www.opengraph.xyz) atau [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 10. Struktur folder

```
portfolio-ulul/
├─ public/                  file statis (disalin apa adanya)
│  ├─ files/cv.pdf
│  ├─ fonts/                Fraunces + General Sans
│  ├─ og/                   gambar preview link
│  └─ favicon.svg, apple-touch-icon.png
├─ og-src/                  sumber gambar OG & ikon (HTML)
├─ src/
│  ├─ content/site.ts       ★ SEMUA KONTEN
│  ├─ assets/               foto & screenshot (dioptimasi otomatis)
│  ├─ styles/               tokens.css (warna/tipografi) + global.css
│  ├─ components/           Hero, About, Work, Experience, Skills, Beyond, Contact, ...
│  ├─ scripts/              animasi & interaksi (GSAP, Lenis, cursor, tema, filter)
│  ├─ layouts/Base.astro    <head>: SEO, Open Graph, JSON-LD, tema
│  └─ pages/                rute: /, /id/, /work/[slug], /id/work/[slug], robots.txt
└─ astro.config.mjs
```

### Catatan aksesibilitas & performa

- Semua animasi berat dimatikan jika pengunjung mengaktifkan **prefers-reduced-motion**.
- Scroll memakai bawaan browser (tanpa smooth-scroll JS), tanpa loader, dan tanpa cursor kustom supaya terasa ringan.
- Efek magnetik, parallax mouse, dan tilt 3D kartu hanya aktif di perangkat dengan mouse.
- Blob dekoratif tidak memakai `filter: blur` beranimasi (mahal untuk GPU); cukup radial-gradient statis.
- Animasi section di bawah layar dimuat terpisah saat browser senggang, supaya halaman pertama lebih ringan.
