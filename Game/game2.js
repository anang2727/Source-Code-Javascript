var tanya=true;
while(tanya) {
    var player = prompt('Masukkan Pilihan \nBatu, GUNTING, KERTAS')

    var bot =Math.random();
    if (bot < 0.34) {
        bot = 'Batu';
    } else if (bot >= 0.34 && bot < 0.67) {
        bot = 'KERTAS';
    } else {
        bot = 'GUNTING';
    }

    var jwb ='';
    if (bot == player) {
        jwb ='SERI';
    } else if (player == 'Batu') {
        jwb = (bot == 'GUNTING') ? 'Menang': 'Kalah';
    } else if (player == 'GUNTING') {
        jwb = (bot == 'KERTAS') ? 'Menang': 'Kalah';
    } else if (player == 'KERTAS') {
        jwb = (bot == 'Batu') ? 'Menang': 'Kalah';
    } else {
        jwb ='Pilih Pilihan Anda';
    }

    alert ('Kamu Memilih :' + ' ' + player + ' ' + 'Bot Memilih :' + '  '+ bot +'\nMaka Hasilnya :' + jwb) ;

    tanya =confirm('Main Lagi?');

}

// alert('Terima Kasih');
document.writeln('<h2>Terima Kasih</h2>')