const cardinaNumber = [1,2,3,4,5,6,7,8,9,10];


export function cetakTabel (num){
  if (typeof num === "number" && num > 0 ){
    return cardinaNumber.map(number => `${num} x ${number} = ${number * num}`).join("\n");
  }else{
    return "Parameter Harus tipe angka dan bernilai positif";
  }
}
