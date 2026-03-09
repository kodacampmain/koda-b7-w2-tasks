const produk = [
  { nama: "Laptop", harga: 1000, stok: 5 },
  { nama: "Mouse", harga: 20, stok: 15 },
  { nama: "Keyboard", harga: 50, stok: 0 },
  { nama: "Monitor", harga: 300, stok: 8 }
];



function cusArr(arr, callback) {
  const hasil = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])){
      hasil = [...hasil,arr[i] ];
    }
  }
  return hasil;
}

function cusMap(arr, callback) {
  const hasil = [];

  for (let i = 0; i < arr.length; i++) {
      const itemTransformasi = callback(arr[i]);
      hasil = [...hasil, itemTransformasi ];
    }
  return hasil;
}
