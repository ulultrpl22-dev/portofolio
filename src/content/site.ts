/**
 * ============================================================
 *  SATU-SATUNYA FILE KONTEN WEBSITE
 * ============================================================
 *  Semua teks (EN + ID), proyek, pengalaman, skill, dan link
 *  ada di sini. Edit file ini saja — tidak perlu menyentuh
 *  komponen lain.
 *
 *  Format teks dua bahasa:  { en: 'English', id: 'Indonesia' }
 *  Cari "[ISI:" untuk menemukan bagian yang wajib kamu lengkapi.
 * ============================================================
 */

export type Lang = 'en' | 'id';
export type L = { en: string; id: string };

/* ------------------------------------------------------------
 * 1. DATA DIRI & LINK
 * ---------------------------------------------------------- */
export const site = {
  name: 'Ulul Nurona Bhakti',
  shortName: 'Ulul',
  initials: 'UNB',
  role: 'Software Engineer',
  /** Domain final setelah deploy (dipakai untuk SEO, sitemap, Open Graph). */
  url: 'https://ulul-nurona.vercel.app', // [ISI: ganti dengan domain kamu]
  defaultLang: 'en' as Lang,
  /** Zona waktu untuk jam lokal di footer. */
  timezone: 'Asia/Jakarta',
  timezoneLabel: 'WIB',
  /** Tanggal terakhir website diperbarui (YYYY-MM-DD). */
  lastUpdated: '2026-10-07',

  email: 'ululnurona216@gmail.com',
  links: {
    /** Kosongkan ('') untuk menyembunyikan tombol GitHub. */
    github: '',
    // Ganti dengan URL profil langsung (linkedin.com/in/...) bila sudah ada
    linkedin: 'https://www.linkedin.com/search/results/people/?keywords=Ulul%20Nurona%20Bhakti',
    cv: '/files/cv.pdf',
  },
  /**
   * Form kontak opsional via Web3Forms (gratis): daftar di web3forms.com,
   * tempel access key di sini. Kosongkan ('') untuk menyembunyikan form
   * dan hanya memakai tombol email/WhatsApp.
   */
  web3formsKey: '',
};

/* ------------------------------------------------------------
 * 2. TEKS ANTARMUKA (navbar, hero, judul section, dll.)
 * ---------------------------------------------------------- */
export const ui = {
  en: {
    meta: {
      title: 'Ulul Nurona Bhakti — Software Engineer',
      description:
        'Software engineer who builds products that are easy on the eyes and easier to use. Currently building an internal ERP at PT Aguna Satya Mulya.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      work: 'Work',
      skills: 'Skills',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      skip: 'Skip to content',
      home: 'Home',
    },
    hero: {
      eyebrow: 'Portfolio — 2026',
      role: 'Software Engineer',
      lead:
        'I build software that’s easy on the eyes and even easier to use — from internal ERP systems to the small details you only notice when they’re missing.',
      now: 'Currently building ERP @ PT Aguna Satya Mulya',
      ctaWork: 'See my work',
      ctaCv: 'Download CV',
      scroll: 'Scroll',
      sticker: 'Open to opportunities ✦ Software Engineer ✦ ',
    },
    marquee: [
      'Laravel',
      'React',
      'MySQL',
      'REST APIs',
      'UI that feels right',
      'Systems thinking',
      'Shipping, not just coding',
    ],
    loader: 'Loading portfolio',
    sections: {
      about: 'About',
      work: 'Selected work',
      experience: 'Experience',
      skills: 'Skills',
      recognition: 'Recognition',
      beyond: 'Beyond code',
      contact: 'Contact',
    },
    work: {
      title: 'Things I’ve <em>built</em>',
      intro: 'Real systems, used by real teams. Pick a project for the full story — the problem, my part in it, and what changed.',
      filterLabel: 'Filter by technology',
      all: 'All',
      showing: 'Projects shown: {n}',
      view: 'View',
      readCase: 'Read case study',
    },
    caseStudy: {
      back: 'All work',
      client: 'Client',
      year: 'Year',
      role: 'Role',
      stack: 'Stack',
      problem: 'The problem',
      myRole: 'My role',
      process: 'Process',
      solution: 'The solution',
      impact: 'Impact',
      gallery: 'Screens',
      links: 'Links',
      demo: 'Live site',
      repo: 'Repository',
      next: 'Next project',
      placeholder: 'Screenshot coming soon',
    },
    experience: {
      title: 'Where I’ve <em>worked</em>',
      intro: 'Less about tasks, more about what changed because I was there.',
      now: 'Now',
    },
    skills: {
      title: 'My <em>toolbox</em>',
      intro: 'No percentage bars — just the things I reach for, grouped by where they live.',
    },
    recognition: {
      title: 'Proof on <em>paper</em>',
      intro: 'The real certificates, not just a list. Tap any card to take a closer look.',
      all: 'All',
      awards: 'Awards',
      certs: 'Certifications',
      events: 'Events',
      orgs: 'Also active in',
      open: 'View certificate',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
    },
    beyond: {
      title: 'Off the <em>keyboard</em>',
      intro: 'When I’m not coding, I’m sometimes the one holding the mic.',
    },
    contact: {
      title: 'Let’s <em>talk</em>',
      lead: 'Hiring for a junior role, an internship, or just want to say hi? My inbox is always open.',
      copy: 'Copy email',
      copied: 'Copied!',
      whatsapp: 'Send an email',
      formTitle: 'Or drop a message here',
      name: 'Your name',
      email: 'Your email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      sent: 'Thanks! Your message is on its way.',
      error: 'Something went wrong. Please email me directly instead.',
    },
    footer: {
      localTime: 'Local time in Jakarta',
      updated: 'Last updated',
      built: 'Built with Astro & GSAP — no trackers.',
      top: 'Back to top',
    },
  },
  id: {
    meta: {
      title: 'Ulul Nurona Bhakti — Software Engineer',
      description:
        'Software engineer yang membangun produk enak dilihat dan lebih enak dipakai. Saat ini membangun ERP internal di PT Aguna Satya Mulya.',
    },
    nav: {
      about: 'Tentang',
      experience: 'Pengalaman',
      work: 'Karya',
      skills: 'Skill',
      contact: 'Kontak',
      menu: 'Menu',
      close: 'Tutup',
      themeToLight: 'Ganti ke mode terang',
      themeToDark: 'Ganti ke mode gelap',
      skip: 'Langsung ke konten',
      home: 'Beranda',
    },
    hero: {
      eyebrow: 'Portofolio — 2026',
      role: 'Software Engineer',
      lead:
        'Saya membangun software yang enak dilihat dan lebih enak lagi dipakai — dari sistem ERP internal sampai detail kecil yang baru terasa saat tidak ada.',
      now: 'Sedang membangun ERP @ PT Aguna Satya Mulya',
      ctaWork: 'Lihat karya',
      ctaCv: 'Unduh CV',
      scroll: 'Gulir',
      sticker: 'Terbuka untuk peluang ✦ Software Engineer ✦ ',
    },
    marquee: [
      'Laravel',
      'React',
      'MySQL',
      'REST API',
      'UI yang terasa pas',
      'Berpikir sistem',
      'Bukan cuma ngoding, tapi rilis',
    ],
    loader: 'Memuat portofolio',
    sections: {
      about: 'Tentang',
      work: 'Karya terpilih',
      experience: 'Pengalaman',
      skills: 'Skill',
      recognition: 'Pencapaian',
      beyond: 'Di luar kode',
      contact: 'Kontak',
    },
    work: {
      title: 'Yang sudah saya <em>bangun</em>',
      intro: 'Sistem nyata, dipakai tim sungguhan. Pilih satu proyek untuk cerita lengkapnya — masalahnya, peran saya, dan apa yang berubah.',
      filterLabel: 'Filter berdasarkan teknologi',
      all: 'Semua',
      showing: 'Proyek ditampilkan: {n}',
      view: 'Lihat',
      readCase: 'Baca studi kasus',
    },
    caseStudy: {
      back: 'Semua karya',
      client: 'Klien',
      year: 'Tahun',
      role: 'Peran',
      stack: 'Stack',
      problem: 'Masalahnya',
      myRole: 'Peran saya',
      process: 'Proses',
      solution: 'Solusinya',
      impact: 'Dampak',
      gallery: 'Tampilan',
      links: 'Tautan',
      demo: 'Lihat situs',
      repo: 'Repositori',
      next: 'Proyek berikutnya',
      placeholder: 'Screenshot segera hadir',
    },
    experience: {
      title: 'Tempat saya <em>berkarya</em>',
      intro: 'Bukan soal daftar tugas, tapi apa yang berubah karena saya ada di sana.',
      now: 'Sekarang',
    },
    skills: {
      title: 'Isi <em>perkakas</em> saya',
      intro: 'Tanpa bar persentase — cukup hal-hal yang biasa saya pakai, dikelompokkan sesuai tempatnya.',
    },
    recognition: {
      title: 'Bukti di atas <em>kertas</em>',
      intro: 'Sertifikat aslinya, bukan sekadar daftar. Klik kartu mana pun untuk melihat lebih dekat.',
      all: 'Semua',
      awards: 'Penghargaan',
      certs: 'Sertifikasi',
      events: 'Kegiatan',
      orgs: 'Aktif juga di',
      open: 'Lihat sertifikat',
      close: 'Tutup',
      prev: 'Sebelumnya',
      next: 'Berikutnya',
    },
    beyond: {
      title: 'Di luar <em>kode</em>',
      intro: 'Kalau tidak sedang ngoding, kadang saya yang pegang mikrofon.',
    },
    contact: {
      title: 'Ngobrol <em>yuk</em>',
      lead: 'Sedang cari junior, anak magang, atau sekadar mau menyapa? Inbox saya selalu terbuka.',
      copy: 'Salin email',
      copied: 'Tersalin!',
      whatsapp: 'Kirim email',
      formTitle: 'Atau tinggalkan pesan di sini',
      name: 'Nama kamu',
      email: 'Email kamu',
      message: 'Pesan',
      send: 'Kirim pesan',
      sending: 'Mengirim…',
      sent: 'Terima kasih! Pesanmu sudah terkirim.',
      error: 'Ada yang salah. Silakan kirim email langsung saja ya.',
    },
    footer: {
      localTime: 'Waktu lokal di Jakarta',
      updated: 'Terakhir diperbarui',
      built: 'Dibuat dengan Astro & GSAP — tanpa pelacak.',
      top: 'Kembali ke atas',
    },
  },
} as const;

/* ------------------------------------------------------------
 * 3. TENTANG
 * ---------------------------------------------------------- */
export const about = {
  /** Foto profil: taruh file di src/assets/profile.jpg (otomatis dikonversi ke WebP/AVIF). */
  photo: 'profile-cutout.webp',
  photoAlt: {
    en: 'Portrait of Ulul Nurona Bhakti',
    id: 'Foto Ulul Nurona Bhakti',
  },
  title: { en: 'A bit about me', id: 'Sedikit tentang saya' },
  paragraphs: [
    {
      en: 'I’m a software engineer from Politeknik Jambi who got hooked on the moment a messy process turns into a clean screen that just works. Today I build internal systems at PT Aguna Satya Mulya — the kind of software real teams open every morning.',
      id: 'Saya software engineer lulusan Politeknik Jambi yang ketagihan dengan satu momen: saat proses yang berantakan berubah jadi layar rapi yang langsung bisa dipakai. Sekarang saya membangun sistem internal di PT Aguna Satya Mulya — jenis software yang dibuka tim sungguhan setiap pagi.',
    },
    {
      en: 'My background as a system analyst taught me to ask “why” before writing a single line. I like sitting with the people who’ll use the thing, sketching flows, then building it end to end — database, API, and the interface on top.',
      id: 'Pengalaman sebagai system analyst mengajari saya bertanya “kenapa” sebelum menulis satu baris kode. Saya suka duduk bareng orang yang akan memakai sistemnya, menggambar alurnya, lalu membangunnya dari ujung ke ujung — database, API, sampai tampilan di atasnya.',
    },
    {
      en: 'What I care about most is software that people actually keep using after the launch day — and lately I’m exploring how AI can take the repetitive parts off a team’s plate.',
      id: 'Yang paling saya pedulikan adalah software yang benar-benar terus dipakai setelah hari peluncuran — dan belakangan saya mendalami bagaimana AI bisa mengambil alih pekerjaan berulang dari sebuah tim.',
    },
  ],
  stickers: [] as { en: string; id: string }[],
};

/* ------------------------------------------------------------
 * 4. PROYEK (Karya terpilih + halaman studi kasus)
 *   Tambah proyek baru: salin satu objek, ganti `slug` (unik,
 *   huruf kecil-dan-strip). Halaman /work/<slug> dibuat otomatis.
 * ---------------------------------------------------------- */
export type Project = {
  slug: string;
  featured: boolean;
  year: string;
  /** Tag teknologi — dipakai untuk filter. */
  tags: string[];
  /** Bingkai mockup: 'browser' | 'phone' | 'dual' (browser + HP bertumpuk) */
  frame: 'browser' | 'phone' | 'dual';
  /**
   * Screenshot utama, path relatif dari src/assets/ — contoh: 'projects/erp-aguna/cover.png'.
   * Kosongkan ('') untuk memakai ilustrasi placeholder.
   */
  cover: string;
  /** Screenshot versi HP (untuk frame 'phone' / 'dual'). Opsional. */
  coverMobile?: string;
  /** Gaya ilustrasi placeholder selama belum ada screenshot. */
  mock: 'dashboard' | 'mobile' | 'calendar' | 'site' | 'list';
  title: L;
  client: L;
  summary: L;
  problem: L;
  role: L;
  process: L[];
  solution: L;
  stack: string[];
  impact: L[];
  /** Galeri screenshot: { src: 'projects/<slug>/nama-file.png', caption } */
  gallery: { src: string; caption: L }[];
  links: { demo?: string; repo?: string };
};

export const projects: Project[] = [
  {
    slug: 'erp-aguna',
    featured: true,
    year: '2026',
    tags: ['Laravel', 'React', 'MySQL', 'REST API', 'VPS'],
    frame: 'dual',
    cover: 'projects/erp-aguna/cover.png',
    coverMobile: 'projects/mandor-aguna/home.png',
    mock: 'dashboard',
    title: { en: 'Aguna Internal ERP', id: 'ERP Internal Aguna' },
    client: { en: 'PT Aguna Satya Mulya', id: 'PT Aguna Satya Mulya' },
    summary: {
      en: 'One system for projects, vendors, warehouse, finance, and HR — replacing scattered spreadsheets at an ICT infrastructure company.',
      id: 'Satu sistem untuk proyek, vendor, gudang, keuangan, dan HR — menggantikan spreadsheet yang tercecer di perusahaan infrastruktur ICT.',
    },
    problem: {
      en: 'Operational data lived in separate spreadsheets and chat threads, so tracking a project from procurement to profit & loss meant chasing several people. Each division kept its own version of the numbers, so management only saw the real margin of a project after it was closed.',
      id: 'Data operasional tersebar di banyak spreadsheet dan chat, sehingga melacak satu proyek dari pengadaan sampai laba-rugi berarti mengejar banyak orang. Setiap divisi memegang versi angkanya sendiri, sehingga manajemen baru melihat margin proyek yang sebenarnya setelah proyek selesai.',
    },
    role: {
      en: 'Software engineer, full-stack — from mapping workflows with each division to building the screens, approval flows, and shipping patches to the VPS.',
      id: 'Software engineer, full-stack — mulai dari memetakan alur kerja bersama tiap divisi sampai membangun layar, alur approval, dan merilis patch ke VPS.',
    },
    process: [
      {
        en: 'Mapped the real workflow with the Business Control and Vendor Management teams before designing the data model.',
        id: 'Memetakan alur kerja nyata bersama tim Business Control dan Vendor Management sebelum merancang model data.',
      },
      {
        en: 'Split the system into modules (Project, Vendor/Procurement, Warehouse/Material, Finance/P&L, HR/Master Data/Sales) sharing one API.',
        id: 'Memecah sistem menjadi modul (Project, Vendor/Procurement, Warehouse/Material, Finance/P&L, HR/Master Data/Sales) dengan satu API bersama.',
      },
      {
        en: 'Modelled every hand-off as a role-based approval flow — Sales submits a PNL, Finance approves the BOQ and direct costs, then the Finance, Operations, and Managing Directors sign off — with an audit trail on each step.',
        id: 'Memodelkan setiap serah-terima sebagai alur approval berbasis peran — Sales mengajukan PNL, Finance menyetujui BOQ dan direct cost, lalu Direktur Keuangan, Operasional, dan Utama memberi persetujuan — dengan audit trail di setiap langkah.',
      },
      {
        en: 'Shipped in small patches to the live VPS, adjusting flows with users week by week (e.g. a shortcut to create a new PNL, monthly resource tracking in the weekly report).',
        id: 'Merilis dalam patch kecil ke VPS produksi, menyesuaikan alur bersama user dari minggu ke minggu (misalnya pintasan “Buat PNL Baru”, resource per bulan di weekly report).',
      },
    ],
    solution: {
      en: 'A Laravel 12 + MySQL backend exposing a REST API, with a React web front end and deployment on a VPS. Each role gets its own workspace: Sales builds the PNL (quantity, price, direct cost, CICO budget), field supervisors report daily progress against an S-curve, the warehouse runs stock opname, and executives read a live P&L dashboard.',
      id: 'Backend Laravel 12 + MySQL dengan REST API, front end web React, dan deploy di VPS. Setiap peran punya ruang kerjanya sendiri: Sales menyusun PNL (quantity, price, direct cost, budget CICO), waspang melaporkan daily progress terhadap kurva-S, gudang menjalankan stock opname, dan direksi membaca dashboard P&L secara langsung.',
    },
    stack: ['Laravel 12', 'MySQL', 'REST API', 'React', 'VPS'],
    impact: [
      { en: 'Project, procurement, warehouse, and finance now read from one source, so a project’s P&L can be followed while it is still running.', id: 'Proyek, pengadaan, gudang, dan keuangan kini membaca dari satu sumber, sehingga laba-rugi proyek bisa dipantau selagi proyek berjalan.' },
      { en: 'Used across divisions — Sales, Project, Finance, Warehouse, Vendor Management, HR, and the board — each with its own role-based workspace.', id: 'Dipakai lintas divisi — Sales, Project, Finance, Gudang, Vendor Management, HR, hingga direksi — masing-masing dengan ruang kerja sesuai perannya.' },
    ],
    gallery: [
      { src: 'projects/erp-aguna/cover.png', caption: { en: 'Real-time warehouse dashboard across 7 warehouses', id: 'Dashboard gudang realtime gabungan 7 gudang' } },
      { src: 'projects/erp-aguna/progress.png', caption: { en: 'Project lobby: dashboard, field monitoring, budget, tools', id: 'Lobi Project: dashboard, monitoring lapangan, budget, tools' } },
      { src: 'projects/erp-aguna/milestone.png', caption: { en: 'Milestone flow BAK → DRM → RRO → Imple with gated approvals', id: 'Alur milestone BAK → DRM → RRO → Imple dengan ACC bertahap' } },
    ],
    links: {},
  },
  {
    slug: 'mandor-aguna',
    featured: true,
    year: '2026',
    tags: ['Laravel', 'REST API', 'Mobile'],
    frame: 'phone',
    cover: 'projects/mandor-aguna/home.png',
    mock: 'mobile',
    title: { en: 'Waspang Mobile', id: 'Waspang Mobile' },
    client: { en: 'PT Aguna Satya Mulya', id: 'PT Aguna Satya Mulya' },
    summary: {
      en: 'A mobile app for field supervisors on FTTH projects — S-curve progress, BOQ, milestones, and requests per cluster, synced both ways with the desktop ERP.',
      id: 'Aplikasi HP untuk pengawas lapangan (waspang) proyek FTTH — progress kurva-S, BOQ, milestone, dan ajuan per cluster, tersinkron dua arah dengan ERP desktop.',
    },
    problem: {
      en: 'Field progress, material usage, and site issues were reported through chat and photos, so the office had to re-enter everything before it showed up in the ERP.',
      id: 'Progres lapangan, pemakaian material, dan kendala dilaporkan lewat chat dan foto, sehingga kantor harus menginput ulang semuanya sebelum masuk ke ERP.',
    },
    role: { en: 'Developer — mobile UI and the data sync with the desktop ERP.', id: 'Developer — tampilan mobile dan sinkronisasi data dengan ERP desktop.' },
    process: [
      { en: 'Designed a cluster-first flow: supervisors pick one cluster in a lobby, and every menu follows it.', id: 'Merancang alur berbasis cluster: waspang memilih satu cluster di lobby, lalu semua menu mengikutinya.' },
      { en: 'Mirrored the desktop’s milestone and S-curve logic so both apps always show the same stage and progress.', id: 'Menyamakan logika milestone dan kurva-S dengan versi desktop agar kedua aplikasi selalu menampilkan tahap dan progres yang sama.' },
      { en: 'Added field actions — daily updates, issue reports, material take/install/return, stock opname — that land straight in the office’s queues.', id: 'Menambahkan aksi lapangan — update harian, lapor kendala, ambil/pasang/kembalikan material, stok opname — yang langsung masuk ke antrean kantor.' },
    ],
    solution: {
      en: 'A mobile-first React app that shares the ERP’s data, so field data and office data stay in one source of truth. Supervisors enter one cluster from a lobby, and every menu (S-curve, BOQ, milestone, requests) follows that cluster until they leave.',
      id: 'Aplikasi React yang dirancang untuk HP dan memakai data yang sama dengan ERP, sehingga data lapangan dan kantor tetap satu sumber. Waspang masuk ke satu cluster dari lobby, lalu semua menu (kurva-S, BOQ, milestone, ajuan) mengikuti cluster itu sampai keluar.',
    },
    stack: ['React', 'Laravel API', 'MySQL'],
    impact: [{ en: 'Field reports reach the ERP without re-typing, and approvals (ACC) happen against the same data the supervisor sent.', id: 'Laporan lapangan masuk ke ERP tanpa input ulang, dan ACC dilakukan terhadap data yang sama dengan yang dikirim waspang.' }],
    gallery: [
      { src: 'projects/mandor-aguna/lobby.png', caption: { en: 'Cluster lobby — progress, homes passed, pending approvals', id: 'Lobby cluster — progress, total HP, menunggu ACC' } },
      { src: 'projects/mandor-aguna/home.png', caption: { en: 'Cluster home — send updates, report issues', id: 'Beranda cluster — kirim update, lapor kendala' } },
      { src: 'projects/mandor-aguna/kurva-s.png', caption: { en: 'S-curve: plan vs actual', id: 'Kurva-S: plan vs aktual' } },
      { src: 'projects/mandor-aguna/milestone.png', caption: { en: 'Milestone timeline: plan, projection, approved actual', id: 'Timeline milestone: plan, proyeksi, aktual yang sudah di-ACC' } },
      { src: 'projects/mandor-aguna/material.png', caption: { en: 'Field material: take, install, return, stock opname', id: 'Material lapangan: ambil, pasang, kembalikan, stok opname' } },
    ],
    links: {},
  },
  {
    slug: 'ai-scheduler',
    featured: true,
    year: '2026',
    tags: ['Node.js', 'Playwright', 'PostgreSQL', 'Claude AI'],
    frame: 'browser',
    cover: 'projects/ai-scheduler/dashboard.png',
    mock: 'calendar',
    title: { en: 'AI Prompt Scheduler', id: 'Penjadwal Prompt AI' },
    client: { en: 'PT Aguna Satya Mulya', id: 'PT Aguna Satya Mulya' },
    summary: {
      en: 'An internal “AI workspace” that runs saved prompts on a schedule — daily cashflow recap, weekly project progress, low-stock checks — and files every answer per division.',
      id: '“AI workspace” internal yang menjalankan prompt tersimpan sesuai jadwal — rekap cashflow harian, progres proyek mingguan, cek stok menipis — lalu menyimpan setiap jawaban per divisi.',
    },
    problem: {
      en: 'Teams kept retyping the same requests to an AI assistant every day, and the answers ended up scattered across chats. A daily cashflow recap or a weekly project summary meant opening a chat, pasting the same instructions, and copying the answer somewhere else.',
      id: 'Tim mengetik ulang permintaan yang sama ke asisten AI setiap hari, dan jawabannya tercecer di banyak chat. Rekap cashflow harian atau ringkasan proyek mingguan berarti membuka chat, menempel instruksi yang sama, lalu menyalin jawabannya ke tempat lain.',
    },
    role: { en: 'Developer (solo) — backend, automation, and the web dashboard.', id: 'Developer (sendiri) — backend, otomasi, dan dashboard web.' },
    process: [
      {
        en: 'Grouped prompts by division (Finance, Project, Warehouse, General) with optional attachments from Google Drive.',
        id: 'Mengelompokkan prompt per divisi (Finance, Project, Gudang, General) dengan lampiran opsional dari Google Drive.',
      },
      {
        en: 'Scheduled runs with cron expressions (node-cron, Asia/Jakarta), a concurrency limit, and automatic retries.',
        id: 'Menjadwalkan eksekusi dengan cron expression (node-cron, Asia/Jakarta), batas eksekusi paralel, dan retry otomatis.',
      },
      {
        en: 'Logged every execution — status, duration, response — and pushed results to Telegram and Markdown/JSON reports.',
        id: 'Mencatat setiap eksekusi — status, durasi, respons — dan mengirim hasilnya ke Telegram serta laporan Markdown/JSON.',
      },
    ],
    solution: {
      en: 'An Express.js server with Prisma + PostgreSQL that drives Claude through Playwright browser automation, plus a single-page dashboard for prompts, schedules, execution history, projects, and results.',
      id: 'Server Express.js dengan Prisma + PostgreSQL yang menjalankan Claude lewat otomasi browser Playwright, ditambah dashboard satu halaman untuk prompt, jadwal, riwayat eksekusi, project, dan hasil.',
    },
    stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Playwright', 'node-cron', 'Telegram Bot'],
    impact: [{ en: 'Routine reports now run on schedule and arrive in Telegram, with every run logged and searchable per division.', id: 'Laporan rutin kini berjalan sesuai jadwal dan dikirim ke Telegram, dengan setiap eksekusi tercatat dan bisa dicari per divisi.' }],
    gallery: [
      { src: 'projects/ai-scheduler/dashboard.png', caption: { en: 'Dashboard: prompts, active schedules, recent runs', id: 'Dashboard: prompt, jadwal aktif, eksekusi terbaru' } },
      { src: 'projects/ai-scheduler/prompts.png', caption: { en: 'Prompts grouped by division', id: 'Prompt per divisi' } },
      { src: 'projects/ai-scheduler/schedules.png', caption: { en: 'Cron schedules', id: 'Jadwal cron' } },
      { src: 'projects/ai-scheduler/executions.png', caption: { en: 'Execution history', id: 'Riwayat eksekusi' } },
    ],
    links: {},
  },
  {
    slug: 'aguna-website',
    featured: true,
    year: '2026',
    tags: ['Web Design', 'Frontend'],
    frame: 'browser',
    cover: 'projects/aguna-website/cover.png',
    mock: 'site',
    title: { en: 'Company Website Redesign', id: 'Redesign Website Perusahaan' },
    client: { en: 'agunasatyamulya.co.id', id: 'agunasatyamulya.co.id' },
    summary: {
      en: 'Redesigned and published the official website of PT Aguna Satya Mulya — clearer story, cleaner structure, easier to maintain.',
      id: 'Mendesain ulang dan memublikasikan website resmi PT Aguna Satya Mulya — cerita lebih jelas, struktur lebih rapi, lebih mudah dirawat.',
    },
    problem: {
      en: 'The company needed a site that explains what it does at a glance — solutions, project track record, coverage, and clients — for prospective partners.',
      id: 'Perusahaan butuh website yang menjelaskan apa yang dikerjakan dalam sekali lihat — solusi, rekam jejak proyek, jangkauan, dan klien — untuk calon mitra.',
    },
    role: { en: 'Designer and developer — layout, content structure, build, and publishing.', id: 'Desainer dan developer — tata letak, struktur konten, build, dan publikasi.' },
    process: [
      { en: 'Structured the story as Hero → About → Core solutions → Achievements → Project highlights → Coverage map → Life in Aguna → Clients.', id: 'Menyusun alur cerita Hero → About → Solusi → Pencapaian → Sorotan proyek → Peta jangkauan → Life in Aguna → Klien.' },
      { en: 'Built an interactive coverage map of project sites across Indonesia and a client logo wall.', id: 'Membangun peta interaktif lokasi proyek di seluruh Indonesia dan dinding logo klien.' },
    ],
    solution: { en: 'A clean, responsive company site with a clear call to action on every section, an interactive map, and a gallery of team activities.', id: 'Website perusahaan yang bersih dan responsif dengan ajakan bertindak di tiap bagian, peta interaktif, dan galeri kegiatan tim.' },
    stack: ['HTML', 'CSS', 'JavaScript', 'Leaflet'],
    impact: [{ en: 'Live at agunasatyamulya.co.id as the company’s official front door for partners and clients.', id: 'Tayang di agunasatyamulya.co.id sebagai pintu depan resmi perusahaan bagi mitra dan klien.' }],
    gallery: [
      { src: 'projects/aguna-website/about.png', caption: { en: 'About section', id: 'Bagian About' } },
      { src: 'projects/aguna-website/projects.png', caption: { en: 'Project highlights', id: 'Sorotan proyek' } },
      { src: 'projects/aguna-website/coverage.png', caption: { en: 'Nationwide coverage map', id: 'Peta jangkauan nasional' } },
    ],
    links: { demo: 'https://agunasatyamulya.co.id' },
  },
  {
    slug: 'grosir-sembako',
    featured: true,
    year: '2026',
    tags: ['JavaScript', 'UI/UX', 'Design System'],
    frame: 'browser',
    cover: 'projects/grosir-sembako/cover.png',
    mock: 'dashboard',
    title: { en: 'Wholesale Grocery POS & Bookkeeping', id: 'Kasir & Pembukuan Grosir Sembako' },
    client: { en: 'Prototype', id: 'Prototipe' },
    summary: {
      en: 'A point-of-sale and bookkeeping prototype for a wholesale grocery shop — cashier, stock, purchases, receivables, and a real P&L — backed by its own design system.',
      id: 'Prototipe kasir dan pembukuan untuk toko grosir sembako — kasir, stok, pembelian, piutang, sampai laporan laba-rugi — lengkap dengan design system sendiri.',
    },
    problem: {
      en: 'A wholesale grocery shop juggles retail and bulk prices, cash, transfer, and credit sales, supplier debts, and stock that runs out quietly. Many small shops still keep this in notebooks, so profit is only a guess.',
      id: 'Toko grosir harus mengatur harga eceran dan grosir, penjualan tunai, transfer, dan tempo, hutang ke supplier, serta stok yang habis tanpa terasa. Banyak toko kecil masih mencatatnya di buku, sehingga laba hanya bisa ditebak.',
    },
    role: { en: 'Designer and front-end developer (solo).', id: 'Desainer dan front-end developer (sendiri).' },
    process: [
      {
        en: 'Wrote a design system first: colour tokens where every colour has one meaning (amber = wholesale price or credit, red = low stock, teal = bank transfer), tabular numbers, and 44px touch targets for the cashier desk.',
        id: 'Menyusun design system lebih dulu: token warna yang masing-masing punya satu arti (kuning = harga grosir/tempo, merah = stok menipis, toska = transfer bank), angka tabular, dan area sentuh 44px untuk meja kasir.',
      },
      {
        en: 'Built 17 reusable components (product card, cart line, payment panel, receipt, P&L statement) and assembled them into a single-file app.',
        id: 'Membangun 17 komponen siap pakai (kartu produk, baris keranjang, panel pembayaran, struk, laporan laba-rugi) lalu merangkainya menjadi aplikasi satu file.',
      },
      {
        en: 'Implemented the accounting logic: weighted-average cost of goods, automatic wholesale pricing by quantity, receivables and payables, and a balance sheet that has to balance.',
        id: 'Mengimplementasikan logika akuntansi: HPP rata-rata tertimbang, harga grosir otomatis berdasarkan jumlah, piutang dan hutang, serta neraca yang wajib seimbang.',
      },
    ],
    solution: {
      en: 'A browser-only app (HTML, CSS, vanilla JavaScript, no build step) with a dashboard, cashier, products & stock, purchases, expenses, customers, and reports (P&L, balance sheet, best sellers, sales history). Data lives in localStorage, ready to be wired to a backend.',
      id: 'Aplikasi yang berjalan langsung di browser (HTML, CSS, JavaScript murni, tanpa build) dengan dashboard, kasir, produk & stok, pembelian, biaya, pelanggan, dan laporan (laba-rugi, neraca, produk terlaris, riwayat penjualan). Data disimpan di localStorage dan siap dihubungkan ke backend.',
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'localStorage', 'Design tokens'],
    impact: [{ en: 'A working prototype with 7 days of sample data and a documented design system, ready to be connected to a backend.', id: 'Prototipe yang sudah berjalan dengan data contoh 7 hari dan design system yang terdokumentasi, siap dihubungkan ke backend.' }],
    gallery: [
      { src: 'projects/grosir-sembako/kasir.png', caption: { en: 'Cashier: wholesale price kicks in automatically by quantity', id: 'Kasir: harga grosir aktif otomatis sesuai jumlah' } },
      { src: 'projects/grosir-sembako/laporan.png', caption: { en: 'Profit & loss report', id: 'Laporan laba-rugi' } },
    ],
    links: {},
  },
  {
    slug: 'spk-ormawa',
    featured: true,
    year: '2026',
    tags: ['Laravel', 'PHP', 'MySQL', 'SAW'],
    frame: 'browser',
    cover: 'projects/spk-ormawa/dashboard.png',
    mock: 'list',
    title: { en: 'ORMAWA Decision Support System (SAW)', id: 'Sistem Pendukung Keputusan ORMAWA (SAW)' },
    client: { en: 'Thesis · Politeknik Jambi', id: 'Skripsi · Politeknik Jambi' },
    summary: {
      en: 'My thesis: an information system for student organisations at Politeknik Jambi that ranks work-programme proposals with the Simple Additive Weighting (SAW) method.',
      id: 'Skripsi saya: sistem informasi organisasi mahasiswa Politeknik Jambi yang memeringkat usulan program kerja dengan metode Simple Additive Weighting (SAW).',
    },
    problem: {
      en: 'Work-programme proposals from 10 student organisations were reviewed by hand, so deciding which ones to prioritise was slow and hard to justify. A transparent, criteria-based ranking helps student affairs decide fairly and consistently.',
      id: 'Usulan program kerja dari 10 ormawa diperiksa manual, sehingga menentukan mana yang diprioritaskan lambat dan sulit dipertanggungjawabkan. Peringkat berbasis kriteria yang transparan membantu bagian kemahasiswaan memutuskan secara adil dan konsisten.',
    },
    role: { en: 'Analyst, designer, and developer (solo).', id: 'Analis, desainer, dan developer (sendiri).' },
    process: [
      {
        en: 'Modelled the flow with DFD level 0 & 1 and designed every screen per role (organisation head, student-affairs staff, Vice Director III, admin).',
        id: 'Memodelkan alur dengan DFD level 0 & 1 dan merancang setiap layar per peran (ketua ormawa, staff kemahasiswaan, Wadir III, admin).',
      },
      {
        en: 'Defined four SAW criteria — Category (30%), Date availability (25%), Impact (20%), Budget (25%, cost) — scored automatically from each proposal’s data.',
        id: 'Menetapkan empat kriteria SAW — Kategori (30%), Ketersediaan Tanggal (25%), Dampak Kegiatan (20%), Anggaran (25%, cost) — yang dinilai otomatis dari data tiap usulan.',
      },
      {
        en: 'Built the approval flow: proposal → staff verification → Vice Director sign-off, with revision uploads, notifications, and monthly/yearly reports.',
        id: 'Membangun alur persetujuan: usulan → verifikasi staff → persetujuan Wadir III, lengkap dengan unggah revisi, notifikasi, dan laporan bulanan/tahunan.',
      },
    ],
    solution: {
      en: 'A Laravel web app that normalises the decision matrix and computes Si = Σ(rij × wj) for every proposal, then shows a priority ranking next to the timeline. Admins can tune criteria weights without touching code.',
      id: 'Aplikasi web Laravel yang menormalisasi matriks keputusan dan menghitung Si = Σ(rij × wj) untuk setiap usulan, lalu menampilkan peringkat prioritas di samping timeline. Admin bisa mengatur bobot kriteria tanpa mengubah kode.',
    },
    stack: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Chart.js', 'Excel export'],
    impact: [{ en: 'Proposals from 10 organisations are ranked automatically, and the whole cycle — proposal, approval, activity report, monthly/yearly recap — lives in one system.', id: 'Usulan dari 10 ormawa diperingkat otomatis, dan seluruh siklus — usulan, persetujuan, laporan kegiatan, rekap bulanan/tahunan — berada dalam satu sistem.' }],
    gallery: [
      { src: 'projects/spk-ormawa/dashboard.png', caption: { en: 'Admin dashboard', id: 'Dashboard admin' } },
      { src: 'projects/spk-ormawa/saw.png', caption: { en: 'SAW priority ranking per category', id: 'Peringkat prioritas SAW per kategori' } },
      { src: 'projects/spk-ormawa/proker.png', caption: { en: 'Work programmes and approval status', id: 'Program kerja dan status persetujuan' } },
      { src: 'projects/spk-ormawa/login.png', caption: { en: 'Sign-in', id: 'Halaman masuk' } },
    ],
    links: {},
  },
];

/* ------------------------------------------------------------
 * 5. PENGALAMAN (timeline, urut dari terbaru)
 * ---------------------------------------------------------- */
export const experience = [
  {
    role: { en: 'Software Engineer & System Analyst', id: 'Software Engineer & System Analyst' },
    org: 'PT Aguna Satya Mulya',
    place: { en: 'South Jakarta', id: 'Jakarta Selatan' },
    period: { en: 'Sep 2026 — Present', id: 'Sep 2026 — Sekarang' },
    points: [
      {
        en: 'Interview users across divisions — Sales, Project, Finance, Warehouse, Vendor Management, HR, and the board — to understand how work really flows today.',
        id: 'Mewawancarai user lintas divisi — Sales, Project, Finance, Gudang, Vendor Management, HR, hingga direksi — untuk memahami alur kerja yang sebenarnya.',
      },
      {
        en: 'Analyse business processes and write the Business Requirements Document (BRD): requirements, user roles, approval flows, and acceptance criteria.',
        id: 'Menganalisis proses bisnis dan menyusun Business Requirements Document (BRD): kebutuhan, peran user, alur approval, dan kriteria penerimaan.',
      },
      {
        en: 'Design the data model and screens, then build the internal ERP end to end (Laravel 12, MySQL, REST API, React) so every division works from the same project, stock, and finance data.',
        id: 'Merancang model data dan layar, lalu membangun ERP internal dari ujung ke ujung (Laravel 12, MySQL, REST API, React) agar setiap divisi bekerja dari data proyek, stok, dan keuangan yang sama.',
      },
      {
        en: 'Test each module with its users (functional and acceptance testing), fix findings, and roll out patches to the production VPS.',
        id: 'Menguji setiap modul bersama penggunanya (functional dan acceptance testing), memperbaiki temuan, lalu merilis patch ke VPS produksi.',
      },
      {
        en: 'Lead implementation: user onboarding, demo accounts, data migration from spreadsheets, and ongoing support after go-live.',
        id: 'Memimpin implementasi: onboarding user, akun demo, migrasi data dari spreadsheet, dan pendampingan setelah go-live.',
      },
      {
        en: 'Ship a companion field app (Waspang Mobile) so site supervisors report progress, BOQ, and material use straight into the ERP.',
        id: 'Merilis aplikasi lapangan pendamping (Waspang Mobile) agar waspang melaporkan progres, BOQ, dan pemakaian material langsung ke ERP.',
      },
    ],
  },
  {
    role: { en: 'Intern — Business Control & Development, Vendor Management', id: 'Intern — Business Control & Development, Vendor Management' },
    org: 'PT Aguna Satya Mulya',
    place: { en: 'South Jakarta', id: 'Jakarta Selatan' },
    period: { en: 'Apr — Aug 2026', id: 'Apr — Agu 2026' },
    points: [
      {
        en: 'Built the first ERP modules so that vendor and procurement data no longer lived in separate spreadsheets.',
        id: 'Membangun modul ERP pertama sehingga data vendor dan pengadaan tidak lagi tercecer di spreadsheet terpisah.',
      },
      {
        en: 'Built an AI prompt scheduler that runs recurring reports automatically so that teams stop retyping the same requests.',
        id: 'Membangun penjadwal prompt AI yang menjalankan laporan rutin otomatis sehingga tim tidak perlu mengetik ulang permintaan yang sama.',
      },
      {
        en: 'Redesigned and published agunasatyamulya.co.id so that partners can see the company’s solutions, projects, and coverage at a glance.',
        id: 'Mendesain ulang dan memublikasikan agunasatyamulya.co.id sehingga mitra bisa melihat solusi, proyek, dan jangkauan perusahaan dalam sekali lihat.',
      },
      {
        en: 'Supported Vendor Management with vendor data, approval flows, and partner (mandor) records inside the ERP.',
        id: 'Mendukung Vendor Management dengan data vendor, alur approval, dan data mitra (mandor) di dalam ERP.',
      },
    ],
  },
  {
    role: { en: 'System Analyst Intern', id: 'System Analyst Intern' },
    org: 'INOBI',
    place: { en: 'Jambi', id: 'Jambi' },
    period: { en: '2025', id: '2025' },
    points: [
      { en: 'Analysed business processes and turned them into requirements, flowcharts, and data models the developers could build from.', id: 'Menganalisis proses bisnis dan menuangkannya menjadi kebutuhan, flowchart, dan model data yang siap dibangun developer.' },
      { en: 'Bridged users and the development team during reviews and testing.', id: 'Menjembatani pengguna dan tim developer saat review dan pengujian.' },
    ],
  },
  {
    role: { en: 'Head of Association — HIMAPEL', id: 'Ketua Himpunan — HIMAPEL' },
    org: 'Himpunan Mahasiswa TRPL, Politeknik Jambi',
    place: { en: 'Jambi', id: 'Jambi' },
    period: { en: '2023 — 2025', id: '2023 — 2025' },
    points: [
      {
        en: 'Led the 2024/2025 board across five divisions, appointed by the Director’s decree.',
        id: 'Memimpin kepengurusan 2024/2025 dengan lima divisi, ditetapkan melalui SK Direktur.',
      },
      {
        en: 'Oversaw two national webinars run by the association: Cyber Security (June 2024) and Artificial Intelligence (July 2024).',
        id: 'Membawahi dua webinar nasional yang digelar himpunan: Cyber Security (Juni 2024) dan Artificial Intelligence (Juli 2024).',
      },
      {
        en: 'Started in the Social & Public Relations division (2023/2024) before being elected head.',
        id: 'Berawal dari Divisi Sosial & Humas (2023/2024) sebelum terpilih menjadi ketua.',
      },
      {
        en: 'Hosted campus events as MC — including English-language MC at Politeknik Jambi’s 17th graduation ceremony (2024), the POLJAM Mart grand opening, and HIMAPEL’s general assembly.',
        id: 'Menjadi MC acara kampus — termasuk MC Bahasa Inggris Wisuda XVII Politeknik Jambi (2024), grand opening POLJAM Mart, dan Mubes HIMAPEL.',
      },
    ],
  },
  {
    role: { en: 'Software Engineering Technology (D4)', id: 'Teknologi Rekayasa Perangkat Lunak (D4)' },
    org: 'Politeknik Jambi',
    place: { en: 'Jambi', id: 'Jambi' },
    period: { en: '2022 — 2026', id: '2022 — 2026' },
    points: [
      { en: 'Thesis: ORMAWA Decision Support System using the SAW method.', id: 'Skripsi: Sistem Pendukung Keputusan ORMAWA dengan metode SAW.' },
    ],
  },
];

/* ------------------------------------------------------------
 * 6. SKILL (tanpa persentase — memang sengaja)
 * ---------------------------------------------------------- */
export const skills = [
  { group: { en: 'Frontend', id: 'Frontend' }, items: ['React', 'JavaScript', 'HTML', 'CSS', 'Blade'] },
  { group: { en: 'Backend', id: 'Backend' }, items: ['Laravel', 'PHP', 'REST API', 'Claude AI API'] },
  { group: { en: 'Database', id: 'Database' }, items: ['MySQL', 'SQL'] },
  { group: { en: 'Tools', id: 'Tools' }, items: ['Git', 'VPS / Linux', 'Figma', 'Postman'] },
  {
    group: { en: 'Soft skills', id: 'Soft skill' },
    items: ['System analysis', 'Public speaking / MC', 'Leadership', 'Talking to users', 'Owning the outcome'],
  },
];

/* ------------------------------------------------------------
 * 7. DI LUAR KODE (kartu polaroid)
 *   `photo`: path relatif dari src/assets/ — contoh 'beyond/mc-poljam-mart.jpg'.
 *   Kosongkan ('') untuk memakai emoji sebagai gambar.
 * ---------------------------------------------------------- */
export const beyond = [
  {
    photo: 'beyond/ketua-himapel.jpg',
    emoji: '🎤',
    title: { en: 'Head of HIMAPEL', id: 'Ketua HIMAPEL' },
    note: { en: 'Speaking as head of the software engineering student association, 2024/2025.', id: 'Memberi sambutan sebagai ketua himpunan mahasiswa TRPL, 2024/2025.' },
  },
  {
    photo: 'beyond/mc-wisuda.jpg',
    emoji: '🎙️',
    title: { en: 'Graduation MC', id: 'MC Wisuda' },
    note: { en: 'English-language MC at Politeknik Jambi’s 17th graduation ceremony, 2024.', id: 'MC Bahasa Inggris Wisuda XVII Politeknik Jambi, 2024.' },
  },
  {
    photo: 'beyond/poljam-campaign.jpg',
    emoji: '📸',
    title: { en: 'Face of #POLJAMBISA', id: 'Wajah #POLJAMBISA' },
    note: { en: 'Featured in Politeknik Jambi’s official campaign content.', id: 'Tampil di konten kampanye resmi Politeknik Jambi.' },
  },
  {
    photo: 'beyond/pmmbn.jpg',
    emoji: '🌿',
    title: { en: 'PMMBN Jambi', id: 'PMMBN Jambi' },
    note: { en: 'Women’s Empowerment Department, featured on PMMBN Jambi’s official account.', id: 'Departemen Pemberdayaan Perempuan, tampil di akun resmi PMMBN Jambi.' },
  },
];

/* ------------------------------------------------------------
 * 8. PENCAPAIAN (galeri sertifikat + organisasi)
 *   `img`: path relatif dari src/assets/ (hasil scan PDF ada di src/assets/certs/).
 *   `cat`: 'award' (penghargaan) | 'cert' (sertifikasi/pelatihan) | 'event' (kepanitiaan/kegiatan).
 *   `star: true` → kartu diberi label sorotan.
 * ---------------------------------------------------------- */
export type Certificate = { img: string; cat: 'award' | 'cert' | 'event'; year: string; title: L; by: L; star?: boolean };

export const certificates: Certificate[] = [
  // --- Penghargaan
  {
    img: 'certs/ideacraft-2025.jpg', cat: 'award', year: '2025', star: true,
    title: { en: '2nd place — International UI/UX Design Competition', id: 'Juara 2 — International UI/UX Design Competition' },
    by: { en: 'POLJAM Ideacraft 2025 · team of 3', id: 'POLJAM Ideacraft 2025 · tim 3 orang' },
  },
  {
    img: 'certs/polines-2024.jpg', cat: 'award', year: '2024', star: true,
    title: { en: '3rd place — UI/UX Mobile Application (national)', id: 'Juara 3 — UI/UX Mobile Application (nasional)' },
    by: { en: 'Elektro Expo, Politeknik Negeri Semarang', id: 'Elektro Expo, Politeknik Negeri Semarang' },
  },
  {
    img: 'certs/pesona-2024.jpg', cat: 'award', year: '2024',
    title: { en: 'Published contributor — “Mengejar Awan” (cloud computing)', id: 'Penyumbang karya — “Mengejar Awan” (komputasi awan)' },
    by: { en: 'PESONA magazine, Politeknik Mersing, Malaysia', id: 'Majalah PESONA, Politeknik Mersing, Malaysia' },
  },
  {
    img: 'certs/nudc-2023.jpg', cat: 'award', year: '2023',
    title: { en: 'Debater — National University Debating Championship', id: 'Debater — National University Debating Championship' },
    by: { en: 'Puspresnas, Ministry of Education · regional', id: 'Puspresnas, Kemendikbudristek · tingkat wilayah' },
  },
  {
    img: 'certs/duta-anti-narkoba-2023.jpg', cat: 'award', year: '2023',
    title: { en: 'Runner-up 2 — Anti-Drug Ambassador, Jambi Province', id: 'Juara Harapan 2 — Duta Anti Narkoba Provinsi Jambi' },
    by: { en: 'Lembaga Anti Narkoba Jambi · BNNP Jambi', id: 'Lembaga Anti Narkoba Jambi · BNNP Jambi' },
  },
  {
    img: 'certs/uinic-2024.jpg', cat: 'award', year: '2024',
    title: { en: 'Participant — UINIC 6.0 UI & UX Competition', id: 'Peserta — UINIC 6.0 UI & UX Competition' },
    by: { en: 'HMPS Informatika', id: 'HMPS Informatika' },
  },
  {
    img: 'certs/unma-2025.jpg', cat: 'award', year: '2025',
    title: { en: 'Participant — UI/UX Design Competition', id: 'Peserta — UI/UX Design Competition' },
    by: { en: 'HMIF Universitas Majalengka', id: 'HMIF Universitas Majalengka' },
  },
  {
    img: 'certs/mtq-prov-2021.jpg', cat: 'award', year: '2021',
    title: { en: 'Best group (1st) — Syarhil Qur’an, MTQ 50 Jambi Province', id: 'Grup terbaik 1 — Syarhil Qur’an, MTQ ke-50 Provinsi Jambi' },
    by: { en: 'Regent of Tanjung Jabung Barat', id: 'Bupati Tanjung Jabung Barat' },
  },
  {
    img: 'certs/mtq-prov-2022.jpg', cat: 'award', year: '2022',
    title: { en: 'Delegate — MTQ 51 Jambi Province', id: 'Peserta — MTQ ke-51 Provinsi Jambi' },
    by: { en: 'Governor of Jambi', id: 'Gubernur Jambi' },
  },
  {
    img: 'certs/mtq-sungai-penuh-2021.jpg', cat: 'award', year: '2021',
    title: { en: 'Best group (1st) — Syarhil Qur’an, MTQ Sungai Penuh', id: 'Grup terbaik 1 — Syarhil Qur’an, MTQ Kota Sungai Penuh' },
    by: { en: 'Mayor of Sungai Penuh', id: 'Wali Kota Sungai Penuh' },
  },
  {
    img: 'certs/mtq-sungai-penuh-2019.jpg', cat: 'award', year: '2019',
    title: { en: 'Best group (1st) — Syarhil Qur’an, MTQ Sungai Penuh', id: 'Grup terbaik 1 — Syarhil Qur’an, MTQ Kota Sungai Penuh' },
    by: { en: 'Mayor of Sungai Penuh', id: 'Wali Kota Sungai Penuh' },
  },
  {
    img: 'certs/mtq-muaro-jambi-2017.jpg', cat: 'award', year: '2017',
    title: { en: '2nd place — Fahmil Qur’an, MTQ Muaro Jambi', id: 'Juara 2 — Fahmil Qur’an, MTQ Kabupaten Muaro Jambi' },
    by: { en: 'Regent of Muaro Jambi', id: 'Bupati Muaro Jambi' },
  },
  {
    img: 'certs/mtq-mendalo-2017.jpg', cat: 'award', year: '2017',
    title: { en: '1st place — Tilawah, village MTQ', id: 'Juara 1 — Tilawah Anak Putri, MTQ Desa Mendalo Darat' },
    by: { en: 'Mendalo Darat, Muaro Jambi', id: 'Mendalo Darat, Muaro Jambi' },
  },

  // --- Sertifikasi & pelatihan
  {
    img: 'certs/bnsp-web-2023.jpg', cat: 'cert', year: '2023', star: true,
    title: { en: 'Junior Web Developer — BNSP certified', id: 'Pengembang Web Pratama — Sertifikat Kompetensi BNSP' },
    by: { en: 'LSP BPPTIK · valid 3 years', id: 'LSP BPPTIK · berlaku 3 tahun' },
  },
  {
    img: 'certs/bnsp-network-2025.jpg', cat: 'cert', year: '2025',
    title: { en: 'Junior Network Administrator — BNSP certified', id: 'Network Administrator Muda — Sertifikat Kompetensi BNSP' },
    by: { en: 'LSP Teknologi Digital', id: 'LSP Teknologi Digital' },
  },
  {
    img: 'certs/bnsp-network-2023.jpg', cat: 'cert', year: '2023',
    title: { en: 'Junior Network Administrator — BNSP certified', id: 'Network Administrator Muda — Sertifikat Kompetensi BNSP' },
    by: { en: 'LSP Informatika', id: 'LSP Informatika' },
  },
  {
    img: 'certs/vsga-web-2023.jpg', cat: 'cert', year: '2023',
    title: { en: 'Junior Web Developer training — 90 hours', id: 'Pelatihan Junior Web Developer — 90 jam' },
    by: { en: 'Digital Talent Scholarship (VSGA), Kominfo', id: 'Digital Talent Scholarship (VSGA), Kominfo' },
  },
  {
    img: 'certs/vsga-network-2023.jpg', cat: 'cert', year: '2023',
    title: { en: 'Junior Network Administrator training — 24 hours', id: 'Pelatihan Junior Network Administrator — 24 jam' },
    by: { en: 'Digital Talent Scholarship (VSGA), Kominfo', id: 'Digital Talent Scholarship (VSGA), Kominfo' },
  },
  {
    img: 'certs/microsoft-office-2025.jpg', cat: 'cert', year: '2025',
    title: { en: 'Applied Microsoft Office', id: 'Applied Microsoft Office' },
    by: { en: 'Trust Training Partners (Microsoft Partner)', id: 'Trust Training Partners (Microsoft Partner)' },
  },
  {
    img: 'certs/dicoding-ai-2024.jpg', cat: 'cert', year: '2024',
    title: { en: 'Fundamentals of AI', id: 'Belajar Dasar AI' },
    by: { en: 'Dicoding Indonesia', id: 'Dicoding Indonesia' },
  },
  {
    img: 'certs/dicoding-data-science-2024.jpg', cat: 'cert', year: '2024',
    title: { en: 'Fundamentals of Data Science', id: 'Belajar Dasar Data Science' },
    by: { en: 'Dicoding Indonesia', id: 'Dicoding Indonesia' },
  },
  {
    img: 'certs/dicoding-sql-2024.jpg', cat: 'cert', year: '2024',
    title: { en: 'Fundamentals of SQL', id: 'Belajar Dasar Structured Query Language (SQL)' },
    by: { en: 'Dicoding Indonesia', id: 'Dicoding Indonesia' },
  },
  {
    img: 'certs/dicoding-python-2024.jpg', cat: 'cert', year: '2024',
    title: { en: 'Getting started with Python', id: 'Memulai Pemrograman dengan Python' },
    by: { en: 'Dicoding Indonesia', id: 'Dicoding Indonesia' },
  },

  // --- Kepanitiaan & kegiatan
  {
    img: 'certs/mc-wisuda-2024.jpg', cat: 'event', year: '2024', star: true,
    title: { en: 'English-language MC — 17th graduation ceremony', id: 'MC Bahasa Inggris — Wisuda XVII' },
    by: { en: 'Politeknik Jambi', id: 'Politeknik Jambi' },
  },
  {
    img: 'certs/panitia-webinar-ai-2024.jpg', cat: 'event', year: '2024',
    title: { en: 'Organiser — National Webinar “Artificial Intelligence”', id: 'Panitia — Webinar Nasional “Artificial Intelligence”' },
    by: { en: 'HIMAPEL, Politeknik Jambi', id: 'HIMAPEL, Politeknik Jambi' },
  },
  {
    img: 'certs/panitia-webinar-cyber-2024.jpg', cat: 'event', year: '2024',
    title: { en: 'Organiser — National Webinar “Cyber Security”', id: 'Panitia — Webinar Nasional “Cyber Security”' },
    by: { en: 'HIMAPEL, Politeknik Jambi', id: 'HIMAPEL, Politeknik Jambi' },
  },
  {
    img: 'certs/webinar-revolusi-industri-2023.jpg', cat: 'event', year: '2023',
    title: { en: 'Participant — “IT for the young generation in Industry 5.0”', id: 'Peserta — “Peran TI untuk Generasi Muda di Era Revolusi Industri 5.0”' },
    by: { en: 'Universitas Yos Soedarso Surabaya', id: 'Universitas Yos Soedarso Surabaya' },
  },
];

/** Organisasi di luar HIMAPEL (HIMAPEL sudah ada di timeline Pengalaman). */
export const organisations: { year: string; title: L; by: L }[] = [
  {
    year: '2024–2025',
    title: { en: 'Talent division', id: 'Divisi Minat dan Bakat' },
    by: { en: 'Public Speaking Club, Politeknik Jambi', id: 'UKM Public Speaking, Politeknik Jambi' },
  },
  {
    year: '2023–2024',
    title: { en: 'Inter-regional Relations', id: 'Bidang Hubungan Luar Daerah' },
    by: { en: 'BEM Daerah Jambi', id: 'BEM Daerah Jambi' },
  },
  {
    year: '',
    title: { en: 'Women’s Empowerment Dept.', id: 'Departemen Pemberdayaan Perempuan' },
    by: { en: 'PMMBN Jambi Province', id: 'PMMBN Provinsi Jambi' },
  },
];
