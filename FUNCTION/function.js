// function tambah(a,b) {
//     return a+b;
// }
// var hasil = tambah (2,3);
// console.log(hasil)
// ================================================================

// function tambah (a,b) {
//     return a+b;
// }

// var  a = 15;
// var  b = 15;
// var hasil= tambah(a,b);
// console.log(hasil);
// ============================================================

// function tambah (a,b) {
//     return a+b;
// }

// var  a = parseInt( prompt('Masukkan'));
// var  b = parseInt( prompt('Masukkan'));
// var hasil= tambah(a*2,b*3);
// console.log(hasil);
// ================================================================

// function tambah(a,b){
//     return a+b;
// }

// function kali(a,b){
//     return a*b;
// }
// var hasil = kali(tambah(4,1), tambah(3,2));
// document.writeln(hasil);
// =================================================================

// function tambah (a,b,c,d) {
//     return a + b + c ;
// }
// var hasil = tambah (3,2,5,3);
// console.log(hasil);
// 👇 bisa dibuat seperti di bawah
// 👇
// function tambah (){
//     var hasil = 0 ;
//     for (var i = 0 ; i <arguments.length; i++) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }
// var coba = tambah(1,2,3,4,2,1,6,7);
// console.log(coba);
// atau 
// console.log(tambah(1,2,3,4,2,1));
// ================================================================
// ************PARAMETER  PADA JAVASCRIPT********************
// 👇
//Rest Parameter

// function hasil(...data) {
//     let total = 0;
//     for (let datas of data){
//     total += datas;
//  }
//     return total;
// }
// let jumlah = hasil(2,3,4,1); 
// console.log(jumlah);
// ================================================================
// 👇
//PARAMETER OBEJCT DESTRCTION yaitu untuk mengambil nilai dari objek dan digunkan sebagai paramater function

// let nama = prompt("Masukkan nama Anda")
// let npm = prompt("Masukkan Npm Anda")
// let unit = prompt("Masukkan Unit Anda")


// function cetak({nama, npm, unit}){
//     console.log("Nama: " + nama);
//     console.log("Npm: " + npm);
//     console.log("Unit: " + unit);
//  }


// Variabel untuk isi dari paramaternya
// let data = {
//     nama: nama,
//     npm: npm,
//     unit: unit
// };

// cetak =
// cetak(data);

// ================================================================

// 👇
//PARAMETER ARRAY DESTRCTION yaitu untuk mengambil nilai dari array dan digunkan sebagai paramater function

// let nama = prompt("Masukkan nama Anda")
// let npm = prompt("Masukkan Npm Anda")
// let unit = prompt("Masukkan Unit Anda")


// function cetakArray([a,b,c]){
//     console.log("Value 1:  " + a);
//     console.log("Value 2:  " + b);
//     console.log("Value 3:  " + c);
//  }

// const nilai =[3,2,1];
//  cetakArray(nilai);
// ================================================================

