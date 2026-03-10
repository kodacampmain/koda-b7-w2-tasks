// mendeklarasi cardinaNumber
const cardinaNumber = [1,2,3,4,5,6,7,8,9,10];

// fuction cetak tabel
export function cetakTabel (num){
  // memeriksa apakah nomor atau bukan  dan apabila nilai positif
  if (typeof num === "number" && num > 0 ){
    // mengunakan map untuk mengabung num dan number menjadi sebuah array dan mengunakan join supaya mengubah array menjadi text
    return cardinaNumber.map(number => `${num} x ${number} = ${number * num}`).join("\n");
  }else{
    return "Parameter Harus tipe angka dan bernilai positif";
  }
}
