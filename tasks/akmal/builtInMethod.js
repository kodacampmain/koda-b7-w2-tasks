export function mapManual(daftarHarga) { // lakukan export untuk function map
  console.log("===========================================");
  console.log("BuiltInMethod");
  console.log("Map");
  const hargaSetelahDiskon = []; // Wadah untuk hasil baru
  console.log("Menghitung Diskon 15 %");
  console.log(daftarHarga);
  // Proses manual menggunakan for loop
  for (let i = 0; i < daftarHarga.length; i++) {
    const hargaSekarang = daftarHarga[i];
    // Logika perubahannya
    const hitungHarga = hargaSekarang + hargaSekarang * 0.15;
    // Masukkan ke array baru
    hargaSetelahDiskon[i] = hitungHarga;
  }
  console.log("Hasil");

  return hargaSetelahDiskon;
}

export function filterManual(siswa) { // lakukan export untuk function filter
  console.log("Filter");
  //lakukan perulangan sebanyak panjang array pada parameter siswa
  for (let i = 0; i < siswa.length; i++) {
    //memfilter apakah array pada objek skor memilki nilai >= 60, jika iya cetak array
    if (siswa[i].skor >= 60) {
      console.log(siswa[i]);
    }
  }
}

