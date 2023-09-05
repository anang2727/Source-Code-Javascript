
    // Tanya main lagi
var tanya = true;
    while (tanya) {


        // Diinput Player
        var p = prompt('Pilih gajah, semut, orang')

        // Pilihan random komputer
    var compt = Math.random();
    if (compt < 0.34) {
        compt = 'gajah';
    } else if (compt >= 0.34 && compt < 0.67) {
        compt = 'semut';
    } else {
        compt = 'orang';
    }


    // Penentuan
    var hasil = '';
if ( p== compt) { //jika player memilih sama dengan computer dan ketika  hasilnya seri
    hasil ='SERI';


} else if ( p == 'gajah') { // jika player memilih gajah
    hasil = (compt == 'orang') ? 'Menang': 'Kalah'; // dan ketika  computer memilih orang


} else if (p =='orang') {  // jika player memilih orang
    hasil = (compt == 'gajah') ? 'Kalah': 'Menang'; // dan ketika  computer memilih gajah


}  else if (p =='semut') {  // jika player memilih semut
    hasil = (compt == 'orang') ? 'Kalah': 'Menang'; // dan ketika  computer memilih orang
}   else {
    hasil ='Kamu Melakukan Pilihan Yang Salah';
}

// Tampilkan hasil di luar else if 
alert('Kamu Memilih: ' + p + ' ' + ' dan Komputer Memilih: ' +compt + '\nMaka Hasilnya : Kamu ' + hasil);

tanya =confirm('Main Lagi?');

}
alert ('Terima Kasih')