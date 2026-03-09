export const cetakTabel = (n) => {
    if(typeof n !== 'number' || n < 0){
        console.log("Parameter harus bertipe data nomor dan harus nomor positif");
        return;
    }
    for (let i = 1; i <= 10; i++) {
        const result = n * i
        console.log(`${n} x ${i} = ${result}`);   
    }
}

