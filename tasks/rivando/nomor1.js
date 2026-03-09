const produk = [
  { nama: "Laptop", harga: 1000, stok: 5 },
  { nama: "Mouse", harga: 20, stok: 15 },
  { nama: "Keyboard", harga: 50, stok: 0 },
  { nama: "Monitor", harga: 300, stok: 8 }
];



function cusArr(arr, callback) {
  const hasil = [];
  arr.forEach(element => {
    if (callback(element)){
      hasil.push(element);
    }
  });
  return hasil;
}

function cusMap(arr, callback) {
  const hasil = [];

  arr.forEach(element => {
    const itemTransformasi = callback(element);
    hasil.push(itemTransformasi);
  });

  return hasil;
}
