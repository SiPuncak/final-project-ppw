# SiPuncak ⛰️

**SiPuncak** adalah sebuah platform web inovatif yang dirancang khusus untuk para pendaki gunung yang ingin mempermudah proses patungan (pembagian biaya) penyewaan atau pembelian peralatan pendakian. Dengan sistem yang adil, cepat, dan transparan, tidak ada lagi kebingungan dalam menghitung biaya trip bersama teman-teman!

## 🚀 Fitur Utama

- **Praktis & Cepat:** Hitung biaya peralatan pendakian dalam hitungan detik tanpa kalkulator manual.
- **Pembagian Adil (Split Bill):** Sistem otomatis yang memastikan setiap anggota membayar sesuai porsinya (bisa dibagi rata atau biaya individu).
- **Manajemen Trip/Room:** Buat room untuk trip kamu dengan menentukan Ketua Tim, Tujuan Gunung, dan detail Rekening/E-Wallet.
- **Kelola Peralatan & Anggota:** Tambahkan daftar barang, harga, jumlah (qty), dan assign ke anggota trip yang bersangkutan.
- **Kalkulasi Akurat:** Mendukung penambahan persentase Pajak (PPN), Biaya Tambahan (seperti parkir/transport), serta potongan Diskon.
- **Generate Nota/Invoice:** Setelah trip dikunci, sistem akan mengenerate nota/rincian tagihan untuk masing-masing anggota.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun sebagai aplikasi Front-End murni menggunakan teknologi berikut:

- **HTML5 & CSS3**
- **JavaScript (Vanilla)** - Memanfaatkan `localStorage` untuk manajemen state dan penyimpanan data sementara.
- **Bootstrap 5** - Framework CSS untuk layout yang responsif dan komponen UI yang modern.
- **AOS (Animate On Scroll)** - Library untuk animasi ketika melakukan scrolling pada halaman.
- **Google Fonts (Inter)** & **Material Symbols Outlined** - Untuk tipografi dan ikonografi yang elegan.

## 📂 Struktur Halaman (Pages)

1. `index.html` - **Landing Page**: Halaman utama yang berisi informasi, keunggulan, video trailer, dan testimoni terkait aplikasi SiPuncak.
2. `createroom.html` - **Buat Trip**: Halaman form untuk menginisiasi trip/room baru oleh Ketua Tim.
3. `room.html` - **Dashboard Trip**: Halaman utama untuk memasukkan barang-barang sewaan, menambah anggota, dan melihat kalkulasi total biaya.
4. `nota.html` - **Invoice/Nota**: Halaman yang menampilkan rincian tagihan akhir setelah trip selesai/dikunci (locked).
5. `history.html` - **Riwayat**: Halaman untuk melihat riwayat trip yang pernah dilakukan.

## 💻 Cara Penggunaan (Local Development)

Karena aplikasi ini sepenuhnya menggunakan client-side technology, kamu tidak memerlukan setup server khusus untuk menjalankannya.

1. **Clone/Download** repository ini ke komputer kamu.
2. Buka folder proyek (`final-project-ppw`).
3. Klik ganda pada file `index.html` untuk membukanya di browser (Google Chrome, Firefox, Safari, dll).
4. Kamu juga bisa menggunakan ekstensi seperti **Live Server** di VS Code untuk pengalaman development yang lebih baik.

## 👤 Alur Penggunaan Aplikasi

1. Buka halaman utama (`index.html`) lalu klik **"Buat Trip Baru"**.
2. Isi nama ketua tim, nama gunung tujuan, dan rekening/e-wallet untuk pembayaran, lalu klik **"Buat Trip & Mulai Patungan"**.
3. Di halaman **Dashboard Trip** (`room.html`):
   - Klik **"Tambah Anggota"** untuk memasukkan nama teman-temanmu yang ikut.
   - Masukkan **Nama Peralatan**, **Harga**, **Qty**, dan pilih siapa yang bertanggung jawab / menggunakan barang tersebut.
   - Atur mode pembagian (Rame / Sendiri).
   - Masukkan PPN, Diskon, atau Biaya Tambahan (jika ada).
4. Setelah semua rincian selesai, klik **"Selesai & Kunci Trip"**.
5. Kamu akan diarahkan ke halaman **Nota**, di mana rincian biaya setiap orang sudah terhitung dengan otomatis!

---
*Dibuat untuk memudahkan petualanganmu mendaki puncak-puncak indah di Indonesia.* 🏕️
