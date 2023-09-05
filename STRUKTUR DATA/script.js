// let object = {key1: "value1", key2: "value2", key3: "value3"}



// const user = {
//     firstName: "Luke",
//     lastName: "Skywalker",
//     age: 19,
//     isJedi: true,
//     "Tinggal" : "Ulee Jalan"
//   };
  
//   console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
//   console.log(`Umur saya ${user.age} tahun`);

//   const saya = { nama:"anang", umur:20};

//   console.log(`${saya.nama} ${saya.umur}`);

// console.log(`${saya.nama}, dan ${user.firstName}`)
//   console.log(`Saya berasal dari ${user["Tinggal"]}`);

  // ================================================================
  // const spaceship = {
  //   name: "Millenium Falcon",
  //   manufacturer: "Corellian Engineering Corporation",
  //   maxSpeed: 1200, // Kondisi Awal sebelum di ubah
  //   color: "Light gray" // Kondisi awal sebelum di ubah
  // };
  
  // spaceship.color = "Glossy red"; //kondisi sesudah di ubah
  // spaceship["maxSpeed"] = 1300; // kondisi sesudah di ubah
  // console.log(spaceship); //Cetak 
// ================================================================
// const spaceship = {
//   name: "Millenium Falcon",
//   manufacturer: "Corellian Engineering Corporation",
//   maxSpeed: 1200,
//   color: "Light gray"
// };

// spaceship.color = "Glossy red";
// spaceship["maxSpeed"] = 1300;

// delete spaceship.manufacturer; //Untuk menghapus properties

// console.log(spaceship);  



// ================================================================
// ARRAY 
// Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel.
// Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.
// let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// console.log(myArray[5]);
// console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// ================================================================
// const myArray = ["Cokelat",       //array 0
//                  42.5,    //array 1
//                   22,        // Array 2
//                    true,      //Array 3
//                     "Programming"];  //Array 4

// myArray.push('JavaScript'); //push() untuk menambah array di dalam variabel 
// console.log(myArray);

// ================================================================
// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// myArray.pop(); //pop() untuk menghapus array di dalam variabel
// console.log(myArray);
// ================================================================
// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// myArray.shift(); //shift() untul menghapus element pertama array 
// myArray.unshift("Apple"); // unshift() untul menambah element pertama array

// console.log(myArray);
// ================================================================
// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// delete myArray[1]; // delate untuk menghapus array tetapi masih memiliki posisi 
// console.log(myArray);
// ================================================================
// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
// console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/
// ================================================================
// const month = ['January', 'March', 'April', 'May'];
// console.log('before splice: ', month);

// month.splice(1, 0, 'February'); // Menambah 0 elemen dari index 1    // Splice() juga bisa menambahkan  element pada array
// console.log('after splice: ', month);

// ================================================================

// Spread Operator
// Masih terkait dengan array, ES6 memiliki fitur menarik untuk membantu pengelolaan array menjadi lebih mudah, yaitu spread operator.

// Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...). Mari kita lihat contoh kode berikut:

// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// console.log(...favorites);

/* output
Seafood Salad Nugget Soup
*/

// console.log(...favorites);

// 👇Penulisan sama dengan penulisan yang ada di bawah ********************************

// console.log(favorites[0], favorites[1], favorites[2], favorites[3]);
// ================================================================
// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini:
// 👇
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const others = ["Cake", "Pie", "Donut"];

// const allFavorites = [favorites, others];

// console.log(allFavorites);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/
// 👇
// 👇
// 👇
// 👇

// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const others = ["Cake", "Pie", "Donut"];

// const allFavorites = [...favorites, ...others];

// console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/


// ================================================================
// // ********************************
// Destructuring Object
// Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18
// }
 
// const { firstName, lastName, age } = profile; 👈
 
// // console.log(firstName, lastName, age);
// Pada contoh di atas tanda kurung kurawal merepresentasikan object yang akan didestrukturisasi. Di dalamnya terdapat firstName, lastName, dan age yang merupakan variabel untuk menyimpan nilai properti dari object profile. Kita juga perlu perhatikan penamaan variabelnya. Pastikan penamaannya sama seperti properti object-nya. Melalui nama variabel inilah nilai-nilai properti object akan dimasukkan secara otomatis. Sehingga variabel firstName akan berisikan nilai profile.firstName, lastName akan berisikan nilai profile.lastName, begitu juga dengan variabel age akan berisikan nilai profile.age.


// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18
// }
 
// let firstName = "Dimas";
// let age = 20;
 
// // menginisialisasi nilai baru melalui destructuring object
// ({ firstName, age } = profile);
 
// console.log(firstName);
// console.log(age);
 
/* output:
John
18
*/

// ****************************************************************
// tidak bisa karena JavaScript mengira kita membuat block statement
// block statement tidak bisa berada pada sisi kiri assignment

// { firstName, age } = profile;
// 👇👇👇
// ({ firstName, age } = profile);

// Alternatifnya, kita bisa secara opsional mendefinisikan nilai default pada properti tertentu jika tidak ditemukan. Untuk melakukanya, tambahkan tanda assignment (=) setelah nama variabel dan tentukan nilai default-nya seperti ini:
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18
// }
 
 
// const { firstName, age, isMale = false } = profile;
 
// console.log(firstName)
// console.log(age)
// console.log(isMale)
 
/* output:
John
18
false
*/
// ================================================================
//👇👇👇 **** Apabila ingin membuat nama variabel yang berbeda dan tidak sama 👇👇👇 **** 
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18
// }
 
// const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
 
// console.log(localFirstName);
// console.log(localLastName);
// console.log(localAge);
 
 
/* output:
John
Doe
18
*/


// let angka1 = 12;``
// let angka2 = 20;
// let angka3 = angka1+angka2;

// console.log("Hasilnya" + ' ' +angka3);
// console.log(`Hasilnya : ${angka3}`)

// var End = [
//     'Berakhirnya Final',
//     'Berakhirlah',
//     'anang, Errornya Dimana?'
// ];


var number = [1,2,3,4,5,6,7,8,9,10]
 var even = number.filter(function(number){
   return number % 2 == 1   
 })

