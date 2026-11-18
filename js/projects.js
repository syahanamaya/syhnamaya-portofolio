// Project content is based on the images and filenames available in each folder.
const projectImages = (folder, filenames) => filenames.map((filename) => ({
  src: `assets/images/projects/${folder}/${filename}`,
  label: filename.replace(/\.png$/i, "")
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
    title: "Pemantauan Kesehatan",
    category: "UI/UX Design",
    description: "Layar beranda, aktivitas fisik, data kesehatan, login, pendaftaran, dan profil.",
    assetLabel: "screens",
    images: projectImages("ui ux design/pemantauanKesehatan", [
      "Aktivitas Fisik.png",
      "Beranda.png",
      "Daftar.png",
      "Kesehatan Pribadi (1).png",
      "Login.png",
      "Profil dan lain lain.png"
    ]),
    caseStudy: {
      overview: "Kumpulan layar antarmuka pemantauan kesehatan sesuai nama file yang tersedia."
    }
  },
  {
    title: "Pengaduan",
    category: "UI/UX Design",
    description: "Layar sistem pengaduan sekolah, termasuk dashboard, formulir, tanggapan, dan laporan.",
    assetLabel: "screens",
    images: projectImages("ui ux design/pengaduan", [
      "Cetak Laporan.png",
      "Form Tanggapan.png",
      "Halaman Dashboard BKJP1.png",
      "Halaman Dashboard Kepsek.png",
      "Halaman Dashboard Siswa.png",
      "Halaman Login.png",
      "Halaman Tambah Akun.png",
      "Halaman Utama.png",
      "Menu Add Complaint.png",
      "Menu Complaint BK.png",
      "Menu Pengaduan.png"
    ]),
    caseStudy: {
      overview: "Kumpulan layar sistem pengaduan sekolah, termasuk dashboard beberapa peran, formulir pengaduan, tanggapan, dan cetak laporan."
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
      overview: "Kumpulan layar sistem informasi perpustakaan dengan halaman dashboard, peminjaman, pengembalian, dan denda."
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
      overview: "Kumpulan layar aplikasi perpustakaan mobile sesuai nama file yang tersedia."
    }
  }
];

window.portfolioCertificates = [];

// Example certificate shape (uncomment and replace with verified details):
// { name: "Certificate name", organization: "Issuing organization", year: "2026", image: "assets/images/certificates/certificate.jpg" }

window.portfolioProfile = {
  email: "",
  linkedin: "",
  github: ""
};
