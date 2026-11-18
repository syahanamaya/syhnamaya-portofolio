# Portofolio Desainer UI/UX — Syahana Maya Sya'bana

Portofolio statis dan responsif yang dibuat dengan HTML, CSS, dan JavaScript murni. Situs dapat dijalankan secara lokal tanpa proses build dan dipublikasikan melalui GitHub Pages.

## Menjalankan secara lokal

Buka `index.html` di peramban atau jalankan server statis dari direktori proyek. Contoh:

```sh
python -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Mempublikasikan melalui GitHub Pages

Push repositori ini ke GitHub. Di **Settings → Pages**, pilih branch dan folder `/ (root)`. Situs menggunakan jalur aset relatif dan tidak memerlukan runtime sisi server maupun proses build.

## Memperbarui konten portofolio

- Tambahkan detail proyek yang sudah terverifikasi pada `window.portfolioProjects` di `js/projects.js`. Kategori proyek harus sesuai dengan label filter di `index.html`.
- Tambahkan metadata sertifikat dan jalur gambar pada `window.portfolioCertificates` di `js/projects.js`.
- Perbarui tautan kontak terverifikasi pada `window.portfolioProfile` di `js/projects.js`.
- Simpan foto profil serta gambar proyek dan sertifikat di bawah `assets/images/`.
- Tombol **Unduh CV** membuka dialog cetak peramban. Pilih “Simpan sebagai PDF” untuk membuat PDF dari ringkasan riwayat yang tersedia di `index.html`.

Informasi proyek, hasil, sertifikat, dan kontak hanya ditampilkan jika tersedia dan terverifikasi.
