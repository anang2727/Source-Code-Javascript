// function minimal(a, b) {
//   if (a < b) {
//     return a;
//   } else if (b < a) {
//     return b;
//   } else {
//     return a;
//   }
// }
// console.log(minimal(1, 4));
// console.log(minimal(3, 2));
// console.log(minimal(3, 3));

// function power(a, b) {
//   return Math.pow(a, b);
// }
// console.log(power(7, 3));
// console.log(power(3, 3));
// console.log(power(4, 0.5));

// const user = {
//     firstName: "Luke",
//     lastName: "Skywalker",
//     age: 19,
//     isJedi: true,
//     "home world": "Tattooine"
//   };

//   console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
//   console.log(`Umur saya ${user.age} tahun`);
//   console.log(`Saya berasal dari ${user["home world"]}`);

// const spaceship = {
//     name: "Millenium Falcon",
//     manufacturer: "Corellian Engineering Corporation",
//     maxSpeed: 1200,
//     color: "Light gray"
//   };

//   spaceship.color = "Glossy red";
//   spaceship["maxSpeed"] = 1300;
//   console.log(spaceship);
// const spaceship = {
//     name: "Millenium Falcon",
//     manufacturer: "Corellian Engineering Corporation",
//     maxSpeed: 1200,
//     color: "Light gray"
//   };

//   spaceship = { name: "New Millenium Falcon" };

// const spaceship = {
//     name: "Millenium Falcon",
//     manufacturer: "Corellian Engineering Corporation",
//     maxSpeed: 1200,
//     color: "Light gray"
//   };

//   spaceship.color = "Glossy red";
//   spaceship["maxSpeed"] = 1300;
//   spaceship.class = "Light freighter";

//   console.log(spaceship);

//

// let nama = [];
// nama.push('Satu','Dua', 'Tiga', 'Empat')

// delete nama[2]
// console.table(nama);

// let nama = {}

// nama["nama"] = "Anang";
// nama["Unit"] = "A";

// console.table(nama);

// const nama =["Satu" , 1, "Dua", 2 , "Tiga"]

// nama.push[6] =  "Empat";

// console.table(nama);

// let nama = ["Anang" , "Kurniawan"];
// for (let name of nama) { //Untuk penggunaan type of pada javascript / membandingkan type variabel 
//     console.log(name);
// }
// let tes = confirm("Are you sure you want to")

// alert(tes)

// let orang = {
//     namaLengkap : "Anang Kurniwan",
//     namaPanggilan : "anang",
// }

// if ("namaLengkap" in orang) { // Contoh penggunaan type in
//     alert(`Hai ${orang.namaLengkap}`);
// } else {
//     alert('Hai Hai')
// }

// console.log('hello' || '' ); //Ouput hello 
// console.log('' || [] ); // ouput []
// console.log('' || "Nol" ); // ouput 0
// console.log(0 || "Nol" ); // ouput Nol
// console.log(null || "Null" ); // ouput Null
// console.log(undefined || "Undefined" ); // ouput Null

/* DATA FALSY ************************************************
    ~ False = boolean false
    ~ 0, -0  = number 0 dan -0 dianggap false
    ~ "", '' , ``
    ~ null = dianggap false    
    ~ undefined = dianggap false
    ~ NaN = dianggap false
*/

// let x = prompt ('Masukkan Nilai 1');
// let y = prompt ('Masukkan Simbol');
// let z = prompt ('Masukkan Nilai 2');

// let tambah = Number(z) + Number(x);
// let kurang = Number(z) - Number(x);
// let kali = Number(z) * Number(x);
// let bagi = Number(z) / Number(x);

// if (y == '+') {
//     hasil = tambah
// }
// if (y == '-') {
//     hasil = kurang
// }
// if (y == '*') {
//     hasil = kali
// }
// if (y == '*') {
//     hasil = kali
// }
// alert(hasil)

// // Menambah isi array 
// let namaArray = [];

// namaArray[0] = 'Nama';
// namaArray[1] = 'Saya';
// namaArray[2] = 'Anang';
// namaArray[3] = 'Kurniawan';


//====== Method Pada Array =================================================
// *************Length*******************
// let namaArray = ['Nama', 'Saya', 'Anang', 'Kurniawan',]
// for (var i = 0; i < namaArray.length; i++) {

//     console.log(namaArray[3])
// }


// let namaLengkap = [];

// namaLengkap[0] = 'Nama';
// namaLengkap[1] = 'Anang';
// namaLengkap[2] = 'Kurniawan';

// *************Pop (Menghapus elemen dalam array)*******************

// namaLengkap.pop();

// *************Join (Berfungsi merubah isi array dan merapikan arrray)*******************
// console.log(namaLengkap.join)

// *************Unshift(Menambah Pada awal array *******************
// namaLengkap.unshift('Hai','Salam', 'Kenal')
// console.log(namaLengkap.join(' + '));

// *************Shift(menghapus elemen pertama dalam array*******************
    // namaLengkap.shift();

// *************Splice(index berapa, mau dihapus berapa elemen1, elemenDitambah1, elemenDitambah2...)*******************
// namaLengkap(1,2,'Saya');
// console.log(namaLengkap.join(' + '));

// *************Slice(Mengambil elemen dalam array untuk dijadikan sebagai array baru)*******************
// let namaLengkap1 = namaLengkap.slice(1,3);
// console.log(namaLengkap1.join('-'))



// *************forEach()*******************

// var angka = [1,2,3,4,5,6,7,8,9];

// angka.forEach(function(k,p){
//     console.log(`Nama ${k} ke- ${p+1}`)
// })

// *************Map(Mengembalikan Nilai Array)*******************
// var angka = [1,2,3,4,5,6,7,8,9];

// var angka1 = angka.map(function(h){
//     return h + 2;
// });
// console.log(angka1.join('-'));


// *************Sort(Mengurutkan angka)*******************
// var angka = [1,2,3,4,5,6,7,8,9];
            // atau 
// var angka = [1,23,37,4,8,3,7,8,9];
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka);


// *************Filter(Mencari banyak nilai dalam array)*******************
// var angka = [1,2,3,4,5,6,7,8,9];
// var angka2 = angka.filter(function(x){
//     // return x == 2; //mencari nilai 2
//         // atau 
//         return x > 5;    // Mencari nilai lebih dari 5

// })
// console.log(angka2);


// *************Find(Mencari satu nilai dalam array & dan tidak menghasilkan array yang baru)*******************
// var angka = [1,2,3,4,5,6,7,8,9];
// var angka2 = angka.find(function(x){
//     return x == 2;
//         // atau 

// })
// console.log(angka2);

// ****************************************(Tes)============================================
/* 
    2 PARAMETERS
        NAMA PENUMPANG
        ARRAY PENUMPANG
    RULES :
    ~JIKA ANGKOT KOSONG, PENUMPANG NAIK DUDUK DI KURSI PERTAMA
    ~PENUMPANG BERIKUTNYA DUDUK DI KURSI SELANJUTNYA SECARA BERURUTAN
    ~JIKA ADA KURSI KOSONG(KARENA PENUMPANG TURUN), PENUMPANG YANG NAIK BERIKUTNYA DUUDK DI KURSI KOSONG TERLEBIH DAHULU
    ~ASUMSI KURSI TIDAK AKAN PENUH DAN AKAN BERTAMBAH TERUS JIKA ADA PENUMPANG NAIK
    ~NAMA PENUMPANG TIDAK BOLEH SAMA, UNTUK MENGHINDARI KEBINGUNGAN KETIKA NANTI PEMUNPANG TURUN 
*/

// var penumpang = [];
// var tambahPenumpang = function(namaPenumpang, penumpang) {
//     // jika angkot kosong
//     if (penumpang.length == 0) {
//         // tambah penumpang di awal array 
//         penumpang.push(namaPenumpang);
// } 