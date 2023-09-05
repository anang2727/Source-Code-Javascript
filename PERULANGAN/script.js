// Contoh Pengulangan While

// var lagi = true;
// while (lagi === true) {
//   var nama = prompt("Berminat");
//   alert("Sukses");
//   lagi = confirm("Tambah Lagi");
// }

// alert("Terima Kasih");

// ================================================================


// var nilaiAwal = 1;
// while (nilaiAwal <= 3) {
//     console.log('Hello World '  + nilaiAwal + 'x') ; 
//     nilaiAwal++;
// }

// ================================================================

// var nilaiAwal = 1;
// var nilai = prompt('Masukkan Nilai');
// while (nilaiAwal <= nilai) {
//     console.log('Hello World '  + nilaiAwal + 'x') ; 
// nilaiAwal++;
// }

// ================================================================

// var ulangi = confirm("Mau Ulangi")
// var lagi = 0;

// while(ulangi){
//     var jawab = confirm("Mau Mengulang ?");
//     lagi++;
//     if (jawab ==false){
//         ulangi = false;
//     }
// }

// document.write("Anda Mengulangi Sebanyak" + " " + lagi+ " " + "Kali")

// alert('Terima Kasih')

// ================================================================
// var ulangi = confirm("Mau Ulangi")
// var lagi = 0;

// do {
//     lagi++;
//     ulangi = confirm("Mau ulangi");
// }

// while(ulangi){
// }

// alert("Anda Mengulangi Sebanyak" + " " + lagi+ " " + "Kali")

// alert('Terima Kasih')

// ================================================================

// var days = ["Indonesian", "English", "French", "German"];

// days.forEach((day)=>{
//     document.write("<p>" + day + "</p>");
// })

// ================================================

var ulangi = confirm('Ingin Ulang');
var contoh =0;

// while (ulangi){
//     contoh++;
//     var pagar = " # ".repeat(contoh) + "<br>";
//     document.write(contoh + " . " + pagar )
//     ulangi = confirm("Are you sure you want to?");
// }

do {
    contoh++;
    var pagar = " # ".repeat(contoh) + "<br>";
    document.write(contoh + " . " + pagar )
    ulangi = confirm("Are you sure you want to?");
}

while (ulangi){

}