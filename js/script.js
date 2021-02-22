//ambil element yang di butuhkan
var keyword2 = document.getElementById('keyword2');
var cari = document.getElementById('cari');
var container = document.getElementById('container');
//tambah event keyboard saat di tulis
keyword2.addEventListener('keyup', function () {
    //buat object ajax
    var xhr = new XMLHttpRequest();
    // cek kesiapan ajax
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            container.innerHTML = xhr.responseText;
        }
    }

    // eksekusi ajax
    xhr.open('GET', 'ajax/mahasiswa.php?keyword=' + keyword2.value, true);
    xhr.send();
});
