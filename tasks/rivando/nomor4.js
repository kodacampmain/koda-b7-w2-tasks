/*
a. ReferenceError: user is not defined
Error ini terjadi ketika JavaScript mencoba mengakses sebuah variabel atau objek di memori, namun alamat tersebut tidak ditemukan.
Analisis Teknis: interpreter(JavaScript Engine) berusaha memanggil properti user. Masalah ini biasa munculnya karena 2 hal:
Scope (Cakupan): Kamu mungkin mendefinisikan user di dalam sebuah fungsi, tapi mencoba memanggilnya di luar fungsi tersebut.
Hoisting/Initialization: Kamu memanggil variabel sebelum variabel tersebut diinisialisasi (terutama jika menggunakan let atau const).

b. TypeError: Cannot read properties of undefined (reading 'length')
Ini adalah masalah umum saat bekerja dengan Array atau hasil dari API.

Analisis Teknis: JavaScript tidak menganggap array kosong ([]) sebagai masalah saat menghitung .length. Masalah sebenarnya adalah variabel yang kamu anggap array ternyata bernilai undefined atau null. Karena undefined bukan sebuah objek, ia tidak memiliki properti .length.

c. SyntaxError: Unexpected token ')' atau Unexpected end of input
Ini adalah kesalahan pada struktur tata bahasa kode.
Analisis Teknis: Kompiler/Interpreter tidak bisa memproses kode ke tahap eksekusi karena "pohon" kodenya tidak lengkap. Satu kurung tutup ) yang hilang atau kelebihan akan merusak seluruh struktur blok fungsi atau kondisi. Ini sering terjadi pada nested callbacks atau promises.

d. TypeError: Cannot read properties of undefined (reading 'status')
Kesalahan ini terjadi pada akses properti bertingkat (Nested Objects).

Analisis Teknis: Kamu mencoba mengakses setting.status. JavaScript berhasil menemukan objek setting, namun di dalam setting tidak ada objek atau properti lain yang bisa dicari lagi. Jika kamu memanggil setting.user.status padahal user tidak ada, maka sistem akan langsung crash.

e. RangeError: Maximum call stack size exceeded
Ini adalah error yang berkaitan dengan penggunaan sumber daya memori.
Analisis Teknis: Setiap kali fungsi dipanggil, ia masuk ke dalam Call Stack. Jika sebuah fungsi memanggil dirinya sendiri (rekursif) tanpa kondisi berhenti yang jelas (base case), stack akan penuh dan meluap.
Penyebab Umum: 1. Fungsi rekursif yang tak terbatas. 2. Event loop yang terjebak dalam perulangan fungsi yang saling memanggil (A panggil B, B panggil A).

*/