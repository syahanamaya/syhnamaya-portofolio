// Konten proyek merujuk pada gambar dan nama berkas yang tersedia di setiap folder.
const projectImages = (folder, filenames, labels = {}) => filenames.map((filename) => ({
  src: `assets/images/projects/${folder}/${filename}`,
  label: labels[filename] || filename.replace(/\.png$/i, "")
}));

window.portfolioProjects = [
  {
    title: "Brosur Menu",
    category: "Desain Grafis",
    description: "Brosur menu makanan dengan foto hidangan dan informasi menu.",
    assetLabel: "gambar",
    images: projectImages("graphic desain/brosur", ["1.png", "2.png"]),
    caseStudy: {
      overview: "Dua gambar brosur menu makanan, ditampilkan sesuai urutan nama berkas."
    }
  },
  {
    title: "Karusel 1",
    category: "Desain Media Sosial",
    description: "Promosi menu makanan rumahan untuk Warung Wareg.",
    assetLabel: "salindia",
    images: projectImages("social media/carousel1", ["1.png", "2.png", "3.png", "4.png", "5.png"]),
    caseStudy: {
      overview: "Seri promosi makanan Warung Wareg dengan lima salindia."
    }
  },
  {
    title: "Karusel 2",
    category: "Desain Media Sosial",
    description: "Promosi Nasi Ayam Jorah untuk Warung Wareg.",
    assetLabel: "salindia",
    images: projectImages("social media/carousel2", [
      "Carousel warung wareg- 17 Oktober 2026 pukul 17.00.56-1.png",
      "Carousel warung wareg- 17 Oktober 2026 pukul 17.00.56-2.png",
      "Carousel warung wareg- 17 Oktober 2026 pukul 17.00.56-3.png",
      "Carousel warung wareg- 17 Oktober 2026 pukul 17.00.56-4.png",
      "Carousel warung wareg- 17 Oktober 2026 pukul 17.00.56-5.png"
    ]),
    caseStudy: {
      overview: "Lima salindia promosi Nasi Ayam Jorah; urutan mengikuti nomor pada nama berkas."
    }
  },
  {
    title: "Karusel 3",
    category: "Desain Media Sosial",
    description: "Promosi menu Nasi Juli untuk Warung Wareg.",
    assetLabel: "salindia",
    images: projectImages("social media/carousel3", ["01.png", "02.png", "03.png", "04.png"]),
    caseStudy: {
      overview: "Empat salindia promosi menu Nasi Juli; urutan mengikuti nomor pada nama berkas."
    }
  },
  {
    title: "Karusel 4",
    category: "Desain Media Sosial",
    description: "Promosi menu makanan Warung Wareg.",
    assetLabel: "salindia",
    images: projectImages("social media/carousel4", ["1.png", "2.png", "3.png", "4.png", "5.png"]),
    caseStudy: {
      overview: "Lima salindia promosi makanan Warung Wareg."
    }
  },
  {
    title: "Health Monitoring App",
    category: "Desain UI/UX",
    description: "Rancangan antarmuka aplikasi seluler untuk membantu pengguna memantau informasi kesehatan pribadi, aktivitas fisik, serta mengakses berbagai fitur pendukung gaya hidup sehat.",
    assetLabel: "layar",
    images: projectImages("ui ux design/pemantauanKesehatan", [
      "Beranda.png",
      "Aktivitas Fisik.png",
      "Kesehatan Pribadi (1).png",
      "Profil dan lain lain.png",
      "Login.png",
      "Daftar.png"
    ], {
      "Kesehatan Pribadi (1).png": "Kesehatan Pribadi",
      "Profil dan lain lain.png": "Profil Saya",
      "Login.png": "Masuk",
      "Daftar.png": "Daftar"
    }),
    caseStudy: {
      subtitle: "Antarmuka Seluler untuk Pemantauan Kesehatan dan Kesejahteraan Pribadi",
      overview: "Health Monitoring App merupakan rancangan aplikasi seluler yang menggabungkan fitur pemantauan kesehatan dan aktivitas fisik dalam satu antarmuka. Desain berfokus pada penyajian informasi kesehatan, aktivitas pengguna, dan fitur pendukung agar mudah diakses melalui ponsel.",
      designObjectives: [
        "Menyediakan tampilan ringkasan informasi kesehatan pribadi.",
        "Mempermudah pengguna mengakses informasi aktivitas fisik.",
        "Menyajikan fitur pengingat dan riwayat kesehatan.",
        "Mengorganisasi berbagai fitur kesehatan dalam navigasi seluler yang mudah dipahami."
      ],
      featureGroups: [
        {
          title: "Dasbor",
          items: [
            "Ringkasan informasi kesehatan.",
            "Statistik aktivitas.",
            "Menu akses cepat untuk tidur, nutrisi, konsultasi, dan kesehatan wanita.",
            "Informasi latihan."
          ]
        },
        {
          title: "Aktivitas Fisik",
          items: [
            "Jumlah langkah, total kalori, dan jarak aktivitas.",
            "Rencana latihan dan panduan video.",
            "Riwayat aktivitas lari, bersepeda, dan berjalan."
          ]
        },
        {
          title: "Kesehatan Pribadi",
          items: [
            "Informasi tekanan darah, berat badan, dan kadar gula.",
            "Pengingat jadwal minum obat, pemeriksaan kesehatan, dan minum air.",
            "Riwayat tidur, konsultasi, dan pola makan."
          ]
        },
        {
          title: "Profil & Pengaturan",
          items: [
            "Informasi profil dan tujuan kesehatan.",
            "Pengaturan aplikasi dan keamanan.",
            "Riwayat aktivitas."
          ]
        },
        {
          title: "Autentikasi",
          items: [
            "Halaman masuk.",
            "Halaman registrasi akun."
          ]
        }
      ],
      contribution: [
        "Merancang enam layar antarmuka seluler yang ditampilkan dalam galeri proyek.",
        "Menyusun tampilan untuk dasbor, aktivitas fisik, kesehatan pribadi, profil, dan autentikasi."
      ],
      resultTitle: "Hasil Desain",
      result: "Menghasilkan rancangan antarmuka aplikasi seluler dalam enam layar yang mencakup dasbor, pemantauan aktivitas fisik, informasi kesehatan pribadi, pengaturan profil, dan halaman autentikasi."
    }
  },
  {
    title: "Sistem Pengaduan Siswa",
    category: "Desain UI/UX",
    description: "Rancangan antarmuka sistem untuk membantu siswa menyampaikan pengaduan dan pihak sekolah mengelola proses tindak lanjut.",
    assetLabel: "layar",
    images: projectImages("ui ux design/pengaduan", [
      "Halaman Dashboard Siswa.png",
      "Menu Add Complaint.png",
      "Menu Complaint BK.png",
      "Menu Pengaduan.png",
      "Form Tanggapan.png",
      "Cetak Laporan.png",
      "Halaman Dashboard BKJP1.png",
      "Halaman Dashboard Kepsek.png",
      "Halaman Login.png",
      "Halaman Utama.png",
      "Halaman Tambah Akun.png"
    ], {
      "Halaman Dashboard Siswa.png": "Dasbor Siswa",
      "Menu Add Complaint.png": "Formulir Tambah Pengaduan",
      "Menu Complaint BK.png": "Daftar Pengaduan BK",
      "Menu Pengaduan.png": "Riwayat Pengaduan",
      "Halaman Dashboard BKJP1.png": "Dasbor BKJP1",
      "Halaman Dashboard Kepsek.png": "Dasbor Kepala Sekolah",
      "Halaman Login.png": "Halaman Masuk"
    }),
    caseStudy: {
      overview: "Sistem Pengaduan Siswa merupakan rancangan UI/UX untuk layanan pengaduan di lingkungan sekolah. Rancangan mencakup tampilan untuk siswa, BKJP1/admin, dan kepala sekolah, termasuk pengajuan pengaduan, pengelolaan, tanggapan, serta laporan.",
      objectiveTitle: "Tujuan Desain",
      objective: "Merancang antarmuka yang mendukung penyampaian pengaduan siswa serta pengelolaan dan tindak lanjut pengaduan oleh pihak sekolah, sesuai layar yang tersedia pada rancangan.",
      userRoles: [
        {
          title: "Siswa",
          description: "Tampilan dasbor, pengajuan, dan riwayat pengaduan."
        },
        {
          title: "BKJP1 / Admin",
          description: "Tampilan dasbor dengan menu pengaduan, siswa, pengelolaan akun, dan laporan."
        },
        {
          title: "Kepala Sekolah",
          description: "Tampilan dasbor khusus kepala sekolah."
        }
      ],
      contribution: [
        "Merancang 11 layar antarmuka yang tersedia untuk sistem pengaduan siswa.",
        "Menyusun tampilan dasbor, pengajuan dan daftar pengaduan, tanggapan, serta cetak laporan."
      ],
      resultTitle: "Hasil Desain",
      result: "Menghasilkan kumpulan 11 rancangan antarmuka yang mencakup pengajuan, pengelolaan, tanggapan, dan pemantauan pengaduan sesuai fitur yang terlihat pada layar project."
    }
  },
  {
    title: "Sistem Informasi Perpustakaan",
    category: "Desain UI/UX",
    description: "Layar dasbor serta alur peminjaman, pengembalian, dan denda.",
    assetLabel: "layar",
    images: projectImages("ui ux design/perpus", [
      "Detail Peminjaman.png",
      "Halaman Dashboard.png",
      "Halaman Denda.png",
      "Halaman Peminjaman.png",
      "Halaman Peminjaman-1.png",
      "Halaman Pengaturan Denda.png",
      "Halaman Pengembalian.png",
      "Login.png",
      "Proses Pengembalian.png"
    ], {
      "Login.png": "Masuk",
      "Halaman Dashboard.png": "Halaman Dasbor"
    }),
    caseStudy: {
      overview: "Kumpulan layar sistem informasi perpustakaan dengan halaman dasbor, peminjaman, pengembalian, dan denda.",
      projectType: "Skripsi / Proyek Akademik",
      role: "Analis Sistem & Desainer UI/UX / Pengembang Web",
      tools: ["Figma", "PHP", "Laravel", "Tailwind CSS", "MySQL"],
      testing: "Pengujian kotak hitam (Black Box Testing)",
      problem: [
        "Pengelolaan perpustakaan di SMK Budi Mulia Ciledug masih menghadapi kendala dalam pencatatan data buku serta transaksi peminjaman dan pengembalian yang dilakukan secara manual.",
        "Kondisi tersebut menyulitkan petugas dalam mengetahui ketersediaan buku, memantau riwayat transaksi, serta mengelola denda akibat keterlambatan, kerusakan, atau kehilangan buku."
      ],
      objective: "Membantu pengelolaan koleksi buku, transaksi peminjaman, pengembalian, dan denda di SMK Budi Mulia Ciledug.",
      contribution: [
        "Menganalisis kebutuhan sistem berdasarkan tiga peran pengguna.",
        "Menyusun pemodelan sistem menggunakan UML untuk menggambarkan kebutuhan dan alur proses setiap pengguna.",
        "Merancang kerangka tampilan dan antarmuka menggunakan Figma.",
        "Mengembangkan aplikasi menggunakan PHP, Laravel, Tailwind CSS, dan MySQL.",
        "Melakukan pengujian fungsionalitas sistem menggunakan metode pengujian kotak hitam (Black Box Testing)."
      ],
      result: [
        "Berhasil mengembangkan Sistem Informasi Perpustakaan Berbasis Web hingga tahap pengujian menggunakan metode kotak hitam (Black Box Testing), dengan seluruh skenario pengujian berhasil dijalankan sesuai fungsionalitas yang dirancang.",
        "Berdasarkan masukan saat sidang skripsi, saya juga menambahkan fitur stok opname untuk mendukung pengelolaan dan pemantauan inventaris koleksi buku perpustakaan."
      ]
    }
  },
  {
    title: "Perpustakaan Mobile",
    category: "Desain UI/UX",
    description: "Layar aplikasi seluler untuk katalog, detail buku, favorit, riwayat, dan profil.",
    assetLabel: "layar",
    images: projectImages("ui ux design/perpusMobile", [
      "Bantuan.png",
      "Denda & Pembayaran.png",
      "Favorit Saya.png",
      "Halaman Akun.png",
      "Halaman Beranda.png",
      "Halaman Detail Buku.png",
      "Halaman Edit Profil.png",
      "Halaman Katalog.png",
      "Halaman Login.png",
      "Halaman Notif.png",
      "Halaman Profil Saya.png",
      "Informasi.png",
      "Riwayat Peminjaman.png"
    ], {
      "Halaman Login.png": "Halaman Masuk",
      "Halaman Notif.png": "Halaman Notifikasi"
    }),
    caseStudy: {
      displayTitle: "Mobile Library – Antarmuka Siswa",
      projectType: "Antarmuka Aplikasi Seluler",
      overview: "Mobile Library merupakan rancangan antarmuka seluler untuk Sistem Informasi Perpustakaan yang sebelumnya dikembangkan dalam versi web. Desain ini berfokus pada kebutuhan siswa sebagai pengguna, dengan menyediakan tampilan untuk mengakses informasi buku dan aktivitas perpustakaan melalui ponsel.",
      objectiveTitle: "Tujuan Desain",
      objective: "Menghadirkan alternatif antarmuka yang memudahkan siswa mengakses layanan perpustakaan melalui ponsel dengan navigasi dan tampilan yang disesuaikan untuk layar seluler.",
      targetUser: "Siswa",
      features: [
        { title: "Beranda", description: "Ringkasan aktivitas dan akses menu utama." },
        { title: "Katalog Buku", description: "Tampilan daftar dan pencarian koleksi buku." },
        { title: "Detail Buku", description: "Informasi buku yang dipilih." },
        { title: "Favorit Saya", description: "Halaman koleksi buku favorit." },
        { title: "Riwayat Peminjaman", description: "Informasi riwayat transaksi peminjaman." },
        { title: "Denda & Pembayaran", description: "Tampilan informasi denda dan pembayaran." },
        { title: "Profil Siswa", description: "Informasi akun dan pengaturan profil." },
        { title: "Fitur Pendukung", description: "Masuk, notifikasi, informasi, serta bantuan." }
      ],
      resultTitle: "Hasil Desain",
      result: "Menghasilkan rancangan 13 layar antarmuka seluler yang mencakup halaman autentikasi, akses katalog, informasi buku, aktivitas peminjaman, hingga pengelolaan akun siswa.",
      relatedProject: {
        title: "Sistem Informasi Perpustakaan Berbasis Web",
        projectTitle: "Sistem Informasi Perpustakaan",
        description: "Mobile Library merupakan pengembangan rancangan antarmuka dari proyek sistem informasi perpustakaan versi web, dengan fokus pengalaman akses bagi siswa melalui perangkat seluler."
      }
    }
  }
];

window.portfolioCertificates = [
  {
    name: "Intro to Software Engineering",
    organization: "RevoU Coding Camp",
    year: "2026",
    image: "assets/images/certificates/Bootcamp.jpg"
  },
  {
    name: "Sertifikat Magang",
    organization: "Komisi Nasional Hak Asasi Manusia",
    year: "2024",
    image: "assets/images/certificates/Sertifikat Magang.jpeg"
  }
];

window.portfolioProfile = {
  email: "syahanamaya@gmail.com",
  linkedin: "https://www.linkedin.com/in/syahanamaya",
  github: "https://github.com/syahanamaya",
  phone: "085892960832"
};
