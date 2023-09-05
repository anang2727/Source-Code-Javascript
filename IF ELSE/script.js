// if (yakin === true) {
//   alert("Ya");
// } else {
//   alert("Tidak");
// }

// ================================================================

//Genap Atau Ganjil
// var angka1 = prompt('Masukkan Pertama');
// var angka2 = prompt('Masukkan Kedua');
// if (angka1 === angka2 ) {
//     alert('Sama');
// }
// else {
//     alert('Tidak sama');
// }

// ================================================================

// var angka1 = prompt('Masukkan Pertama');
// if (angka1 > 0 ) {
//     alert('Plus');
// }
// else {
//     alert('Minus');
// }

// ================================================================

// let ramadan = "end";
// let greeting = "Selamat Hari Raya Idul Fitri 1444 H";
// let adasalah = true;

// const eidFitri = () => {
//     if (ramadan === "end") {
//         console.log(greeting)
//         if (adasalah) {
//             console.log("Minal Aidin Walfaizin");
//             console.log("Mohon Maaf Lahir dan Batin");
//         } else {
//             console.log("Minal Aidin Walfaizin");
//             console.log("Mohon Maaf Lahir dan Batin");
//         }
//     } else {
//         console.log("Masih Puasa")
//     }

//     eidFitri();

// }

// ================================================================

// function scoreChecker(score) {
//     let result;

//   if (score >= 90) {

//     alert ( 'Selamat! Anda mendapatkan nilai A.');

//   } else if (score >= 80) {

//     alert ( 'Anda mendapatkan nilai B.');

//   } else if (score >=70) {

//     alert ( 'Anda mendapatkan nilai C.');

//   } else if (score >= 60) {

//     alert ( 'Anda mendapatkan nilai D.');

//   }else if (score <60) {

//     alert ( 'Anda mendapatkan nilai E.');

//   }

//     return result;
//   }

// ================================================================

// var hasil= prompt('Nilai');
// var nilai= '';
// if(hasil >= 90 ) {
//     nilai = "Nilai Anda A"
// } else if (hasil >= 80 && hasil <= 89) {
//     nilai = "Nilai Anda B"
// } else if (hasil >= 70 && hasil <= 79) {
//     nilai = "Nilai Anda C"
// } else if (hasil >= 60 && hasil <= 69) {
//     nilai = "Nilai Anda D"
// } else  {
//     nilai = " <h2>Nilai Anda E </h2>"
// }
// document.writeln( nilai )
// ================================================================

// var s ='';
// for (var i = 6; i > 0; i-- ) {
//     for (var j = 0; j < i; j++) {
//         s+='# ';
//     }
//     s+='\n';
// }
// console.log(s);

// ================================================================

// var s ='';
// for (var i = 0; i < 5; i++ ) {
//     for (var j = 0; j < i; j++) {
//         s+='# ';
//     }
//     s+='\n';
// }
// console.log(s);

// ================================================================

// var password = prompt('Password');
// var username = prompt('Username');

// if (password == "admin" && username == 'admin') {
//     alert("LOGIN SUKSES");
// } else {
//     alert("Periksa Password Atau Username Anda");
// }

// document.writeln("Sukses")

// ================================================================

// let soal = prompt('2 + 4 = ?' )

// let jawab = (soal == "6") ? "Benar": "Salah";
// document.writeln('Jawaban Anda' + ' ' + jawab)
// ================================================================

// var password = prompt("Password");
// var username = prompt("Username");

// if (password == "admin") {
//   if (username == "admin") {
//     alert("LOGIN SUKSES");
//   } else {
//     alert("Periksa Username atau Password Anda");
//   }
// } else {
//   document.writeln("Akun Anda Belum Terdaftar");
// }

// document.writeln("Sukses");

// ================================================================

// let img = document.getElementById("img");
// let input = document.getElementById("input");
// input.onchange = (e) => {
//   if(input.files[0])
//   img.src = URL.createObjectURL(input.files[0]);
// };

// ================================================================
