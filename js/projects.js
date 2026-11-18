// Project content is based on the images and filenames available in each folder.
const projectImages = (folder, filenames, labels = {}) => filenames.map((filename) => ({
  src: `assets/images/projects/${folder}/${filename}`,
  label: labels[filename] || filename.replace(/\.png$/i, "")
}));

window.portfolioProjects = [
  {
    title: "Brosur Menu",
    category: "Graphic Design",
    description: "Brosur menu makanan dengan foto hidangan dan informasi menu.",
    assetLabel: "images",
    images: projectImages("graphic desain/brosur", ["1.png", "2.png"]),
    caseStudy: {
      overview: "Dua gambar brosur menu makanan, ditampilkan sesuai urutan nama file."
    }
  },
  {
    title: "Carousel 1",
    category: "Social Media Design",
    description: "Promosi menu makanan rumahan untuk Warung Wareg.",
    assetLabel: "slides",
    images: projectImages("social media/carousel1", ["1.png", "2.png", "3.png", "4.png", "5.png"]),
    caseStudy: {
      overview: "Seri promosi makanan Warung Wareg dengan lima slide."
    }
  },
  {
    title: "Carousel 2",
    category: "Social Media Design",
    description: "Promosi Nasi Ayam Jorah untuk Warung Wareg.",
    assetLabel: "slides",
    images: projectImages("social media/carousel2", [
      "Carousel warung wareg- 17 Oktober 2026 pukul 17.00.56-1.png",
      "Carousel warung wareg- 17 Oktober 2026 pukul 17.00.56-2.png",
      "Carousel warung wareg- 17 Oktober 2026 pukul 17.00.56-3.png",
      "Carousel warung wareg- 17 Oktober 2026 pukul 17.00.56-4.png",
      "Carousel warung wareg- 17 Oktober 2026 pukul 17.00.56-5.png"
    ]),
    caseStudy: {
      overview: "Lima slide promosi Nasi Ayam Jorah; urutan mengikuti nomor di nama file."
    }
  },
  {
    title: "Carousel 3",
    category: "Social Media Design",
    description: "Promosi menu Nasi Juli untuk Warung Wareg.",
    assetLabel: "slides",
    images: projectImages("social media/carousel3", ["01.png", "02.png", "03.png", "04.png"]),
    caseStudy: {
      overview: "Empat slide promosi menu Nasi Juli; urutan mengikuti nomor di nama file."
    }
  },
  {
    title: "Carousel 4",
    category: "Social Media Design",
    description: "Promosi menu makanan Warung Wareg.",
    assetLabel: "slides",
    images: projectImages("social media/carousel4", ["1.png", "2.png", "3.png", "4.png", "5.png"]),
    caseStudy: {
      overview: "Lima slide promosi makanan Warung Wareg."
    }
  },
  {
    title: "Health Monitoring App",
    category: "UI/UX Design",
    description: "Rancangan antarmuka aplikasi mobile untuk membantu pengguna memantau informasi kesehatan pribadi, aktivitas fisik, serta mengakses berbagai fitur pendukung gaya hidup sehat.",
    assetLabel: "screens",
    images: projectImages("ui ux design/pemantauanKesehatan", [
      "Beranda.png",
      "Aktivitas Fisik.png",
      "Kesehatan Pribadi (1).png",
      "Profil dan lain lain.png",
      "Login.png",
      "Daftar.png"
    ], {
      "Kesehatan Pribadi (1).png": "Kesehatan Pribadi",
      "Profil dan lain lain.png": "Profil Saya"
    }),
    caseStudy: {
      subtitle: "Mobile Health Monitoring & Personal Wellness Interface",
      overview: "Health Monitoring App merupakan rancangan aplikasi mobile yang menggabungkan fitur pemantauan kesehatan dan aktivitas fisik dalam satu antarmuka. Desain berfokus pada penyajian informasi kesehatan, aktivitas pengguna, dan fitur pendukung agar mudah diakses melalui smartphone.",
      designObjectives: [
        "Menyediakan tampilan ringkasan informasi kesehatan pribadi.",
        "Mempermudah pengguna mengakses informasi aktivitas fisik.",
        "Menyajikan fitur pengingat dan riwayat kesehatan.",
        "Mengorganisasi berbagai fitur kesehatan dalam navigasi mobile yang mudah dipahami."
      ],
      featureGroups: [
        {
          title: "Dashboard",
          items: [
            "Ringkasan informasi kesehatan.",
            "Statistik aktivitas.",
            "Menu akses cepat untuk tidur, nutrisi, konsultasi, dan wanita.",
            "Informasi workout."
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
            "Pengingat jadwal minum obat, check-up, dan minum air.",
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
          title: "Authentication",
          items: [
            "Halaman login.",
            "Halaman registrasi akun."
          ]
        }
      ],
      contribution: [
        "Merancang enam layar antarmuka mobile yang ditampilkan dalam galeri project.",
        "Menyusun tampilan untuk dashboard, aktivitas fisik, kesehatan pribadi, profil, dan autentikasi."
      ],
      resultTitle: "Design Result",
      result: "Menghasilkan rancangan antarmuka aplikasi mobile dalam enam layar yang mencakup dashboard, pemantauan aktivitas fisik, informasi kesehatan pribadi, pengaturan profil, dan halaman autentikasi."
    }
  },
  {
    title: "Sistem Pengaduan Siswa",
    category: "UI/UX Design",
    description: "Rancangan antarmuka sistem untuk membantu siswa menyampaikan pengaduan dan pihak sekolah mengelola proses tindak lanjut.",
    assetLabel: "screens",
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
    ]),
    caseStudy: {
      overview: "Sistem Pengaduan Siswa (Student Complaint System) merupakan rancangan UI/UX untuk layanan pengaduan di lingkungan sekolah. Rancangan mencakup tampilan untuk siswa, BKJP1 / Administrator, dan Kepala Sekolah, termasuk pengajuan pengaduan, pengelolaan, tanggapan, serta laporan.",
      objectiveTitle: "Design Objective",
      objective: "Merancang antarmuka yang mendukung penyampaian pengaduan siswa serta pengelolaan dan tindak lanjut pengaduan oleh pihak sekolah, sesuai layar yang tersedia pada rancangan.",
      userRoles: [
        {
          title: "Siswa",
          description: "Tampilan dashboard, pengajuan, dan riwayat pengaduan."
        },
        {
          title: "BKJP1 / Administrator",
          description: "Tampilan dashboard dengan menu pengaduan, siswa, pengelolaan akun, dan laporan."
        },
        {
          title: "Kepala Sekolah",
          description: "Tampilan dashboard khusus Kepala Sekolah."
        }
      ],
      contribution: [
        "Merancang 11 layar antarmuka yang tersedia untuk sistem pengaduan siswa.",
        "Menyusun tampilan dashboard, pengajuan dan daftar pengaduan, tanggapan, serta cetak laporan."
      ],
      resultTitle: "Design Result",
      result: "Menghasilkan kumpulan 11 rancangan antarmuka yang mencakup pengajuan, pengelolaan, tanggapan, dan pemantauan pengaduan sesuai fitur yang terlihat pada layar project."
    }
  },
  {
    title: "Sistem Informasi Perpustakaan",
    category: "UI/UX Design",
    description: "Layar dashboard serta alur peminjaman, pengembalian, dan denda.",
    assetLabel: "screens",
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
    ]),
    caseStudy: {
      overview: "Kumpulan layar sistem informasi perpustakaan dengan halaman dashboard, peminjaman, pengembalian, dan denda.",
      projectType: "Thesis / Academic Project",
      role: "System Analyst & UI/UX Designer / Web Developer",
      tools: ["Figma", "PHP", "Laravel", "Tailwind CSS", "MySQL"],
      testing: "Black Box Testing",
      problem: [
        "Pengelolaan perpustakaan di SMK Budi Mulia Ciledug masih menghadapi kendala dalam pencatatan data buku serta transaksi peminjaman dan pengembalian yang dilakukan secara manual.",
        "Kondisi tersebut menyulitkan petugas dalam mengetahui ketersediaan buku, memantau riwayat transaksi, serta mengelola denda akibat keterlambatan, kerusakan, atau kehilangan buku."
      ],
      objective: "Membantu pengelolaan koleksi buku, transaksi peminjaman, pengembalian, dan denda di SMK Budi Mulia Ciledug.",
      contribution: [
        "Menganalisis kebutuhan sistem berdasarkan tiga peran pengguna.",
        "Menyusun pemodelan sistem menggunakan UML untuk menggambarkan kebutuhan dan alur proses setiap pengguna.",
        "Merancang wireframe dan antarmuka menggunakan Figma.",
        "Mengembangkan aplikasi menggunakan PHP, Laravel, Tailwind CSS, dan MySQL.",
        "Melakukan pengujian fungsionalitas sistem menggunakan metode Black Box Testing."
      ],
      result: [
        "Berhasil mengembangkan Sistem Informasi Perpustakaan Berbasis Web hingga tahap pengujian menggunakan metode Black Box Testing, dengan seluruh skenario pengujian berhasil dijalankan sesuai fungsionalitas yang dirancang.",
        "Berdasarkan masukan saat sidang skripsi, saya juga menambahkan fitur stok opname untuk mendukung pengelolaan dan pemantauan inventaris koleksi buku perpustakaan."
      ]
    }
  },
  {
    title: "Perpustakaan Mobile",
    category: "UI/UX Design",
    description: "Layar aplikasi mobile untuk katalog, detail buku, favorit, riwayat, dan profil.",
    assetLabel: "screens",
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
    ]),
    caseStudy: {
      displayTitle: "Mobile Library – Student Interface",
      projectType: "Mobile Application Interface",
      overview: "Mobile Library merupakan rancangan antarmuka mobile untuk Sistem Informasi Perpustakaan yang sebelumnya dikembangkan dalam versi web. Desain ini berfokus pada kebutuhan siswa sebagai pengguna, dengan menyediakan tampilan untuk mengakses informasi buku dan aktivitas perpustakaan melalui perangkat mobile.",
      objectiveTitle: "Design Objective",
      objective: "Menghadirkan alternatif antarmuka yang memudahkan siswa mengakses layanan perpustakaan melalui smartphone dengan navigasi dan tampilan yang disesuaikan untuk layar mobile.",
      targetUser: "Siswa",
      features: [
        { title: "Beranda", description: "Ringkasan aktivitas dan akses menu utama." },
        { title: "Katalog Buku", description: "Tampilan daftar dan pencarian koleksi buku." },
        { title: "Detail Buku", description: "Informasi buku yang dipilih." },
        { title: "Favorit Saya", description: "Halaman koleksi buku favorit." },
        { title: "Riwayat Peminjaman", description: "Informasi riwayat transaksi peminjaman." },
        { title: "Denda & Pembayaran", description: "Tampilan informasi denda dan pembayaran." },
        { title: "Profil Siswa", description: "Informasi akun dan pengaturan profil." },
        { title: "Fitur Pendukung", description: "Login, notifikasi, informasi, serta bantuan." }
      ],
      resultTitle: "Design Result",
      result: "Menghasilkan rancangan 13 layar antarmuka mobile yang mencakup halaman autentikasi, akses katalog, informasi buku, aktivitas peminjaman, hingga pengelolaan akun siswa.",
      relatedProject: {
        title: "Sistem Informasi Perpustakaan Berbasis Web",
        projectTitle: "Sistem Informasi Perpustakaan",
        description: "Mobile Library merupakan pengembangan rancangan antarmuka dari proyek sistem informasi perpustakaan versi web, dengan fokus pengalaman akses untuk pengguna siswa melalui perangkat mobile."
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
  email: "",
  linkedin: "",
  github: ""
};
