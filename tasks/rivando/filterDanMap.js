export function custFilter(arr, callback) {
  // memeriksa arr adalah sebuah array apabila bukan array dia di jalankan
  if (!Array.isArray(arr)) {
    throw new TypeError("Argumen pertama harus berupa Array.");
  }
  // memeriksa callback adalah sebuah callback apabila bukan callback dia di jalankan
  if (typeof callback !== "function") {
    throw new TypeError("Argumen kedua harus berupa Fungsi (callback).");
  }
  // sebagai template array sesuai recomendasi dari dokumentasi dari javascript
  let hasil = [];
  // perulangan untuk mendapatkan value dari array
  for (let i = 0; i < arr.length; i++) {
      //error handling untuk menambahkan isi array
      try {
        //memeriksa apakah memenuhi callback/keadaan index value true apabila tidak akan di skip ke index selanjutnya
        if (callback(arr[i])) {
            hasil = [...hasil, arr[i]];
        }
  } //menangkap error yang ada
  catch (error) {
      console.error(`Error pada indeks ke-${i}:`, error.message);
  }

  }
  return hasil;
}

export function custMap(arr, callback) {
  // memeriksa arr adalah sebuah array apabila bukan array dia di jalankan
  if (!Array.isArray(arr)) {
    throw new TypeError("Argumen pertama harus berupa Array.");
  }
  // memeriksa callback adalah sebuah callback apabila bukan callback dia di jalankan
  if (typeof callback !== "function") {
    throw new TypeError("Argumen kedua harus berupa Fungsi (callback).");
  }
  // sebagai template array sesuai recomendasi dari dokumentasi dari javascript
  let hasil = [];
  // perulangan untuk mendapatkan value dari array
  for (let i = 0; i < arr.length; i++) {
    //error handling untuk menambahkan isi array
    try {
        //mengubah value dalam index supaya memenuhi callback/keadaan yang di buat
    const itemTransformasi = callback(arr[i]);
    hasil = [...hasil, itemTransformasi];

    }//menangkap error yang ada
    catch (error) {
      console.error(`Error pada indeks ke-${i}:`, error.message);
    }
  }
  return hasil;
}

