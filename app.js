console.log("Praktikum Dimulai");

// Aktivitas 1: DOM Selection Seleksi DOM 
// DOM Selection kita harus "Menangkap Elemen" Sebelum kita memanipulasi HTML
// Ambil Elemen -> Simpan di dalam variabel javascript

// 1. Ambil Elemen Judul Berdasarkan ID
// document.getElementById("...") -> Ambil Elemen HTML Spesifik berdasarkan ID
const judulUtama = document.getElementById("judul-utama"); 

// 1.1 querySelector("#...") mengambil ID berdasarkan atribut ID 
// Tanda (#) Artinya menargetkan ID (.) Menargetkan Class
// Ambil elemen Sub Judul Bedasarkan ID
const subJudul = document.querySelector("#sub-judul");

// 2. Mengambil Elemen Pada Kartu 1 (Kartu Manipulasi Teks & Style)
const teksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi");

// 3. Mengambil Tombol" Aksi Pada Kartu 1
const btnUbahTeks = document.getElementById("btn-ubah-teks");
const btnToggleWarna =document.getElementById("btn-toggle-warna");
const btnReset = document.getElementById("btn-reset");

// 4. Mengambil Elemen Pada Kartu 2 (fitur catatan dinamis / todolist)
const inputCatatan = document.getElementById("input-catatan");
const btnTambah = document.getElementById("btn-tambah");
const daftarCatatan = document.getElementById("daftar-catatan");
const jumlahCatatan = document.getElementById("jumlah-catatan");
const pesanKosong = document.getElementById("pesan-kosong");


// Aktivitas 2: Manipulasi Teks & Style (Pada Kartu 1)
// addEventListener("click", function() {...}) -> artinya Tolong dengarkan dan tunggu
// setelah di "click" oleh user jalankan perintah di dalam function 

// A. Mengubah Teks & Warna Teks Preview
btnUbahTeks.addEventListener("click", function(){
    // .innerText = Mengisi/Menimpa tulisan teks yang ada di HTMl
    teksPreview.innerText = "Hebat! Teks ini berhasil diubah melalui DOM!";

    // .style.color = Mengubah warna teks secara langsung melalu Javascript (inline)
    teksPreview.style.color = "#1619f6";

    // console.log = Mencetak pesan di console 
    console.log("DOM Teks Preview telah diperbaharui");
});


// B. Mengubah Warna Background Box Preview
btnToggleWarna.addEventListener("click", function(){
    // .classList.toggle("nama-class") -> menambahkan class jika belum ada, menghapus class jika sudah ada
    // Jika class tersebut Belum ada pada elemen, maka class tersebut akan ditambahkan. 
    // Jika class tersebut sudah ada pada elemen, maka class tersebut akan dihapus.
    boxPreview.classList.toggle("active-mode");
    cardManipulasi.classList.toggle("highlight");

    console.log("DOM Box Preview telah diperbaharui");
});

// C. Mengembalikan Teks & Warna Teks Preview ke Default (Reset)
btnReset.addEventListener("click", function(){
    // Mengembalikan Teks Preview ke Default
    teksPreview.innerText = "Halo! Teks ini siap diubah oleh Javascript";

    // Kosongkan Warna agar warna kembali ke default (inherit)
    teksPreview.style.color = "";

    // Hapus class khusus menggunakan .classList.remove("nama-class")
    boxPreview.classList.remove("active-mode");
    cardManipulasi.classList.remove("highlight");

    console.log("DOM Box Preview telah dikembalikan ke default");
});


// Aktivitas 3 & 4: Membuat Catatan Dinamis (Todolist) & Menghitung Jumlah Catatan (Pada Kartu 2)
// Dibagian ini kita belajar membuat elemen HTML Baru (<li>) secara dinamis menggunakan Javascript
// Lalu mengisi teksnya, memberi tombol hapus, lalu menempelkanya kedalam layar (<ul>)

    
// Langkah 1 : Membuat Variabel untuk menampung jumlah catatan
// 'let' digunakan karena nilainya akan berubah-ubah (mutable)
let totalCatatan = 0;


// Langkah 2 : Membuat Fungsi untuk menambahkan catatan baru
// Fungsi ini adalah kumpulan perintah yang diberi nama. Kita bisa memanggilnya kapanpun kita mau.
function perbaruiJumlah() {
    // Masukkan angka totalCatatan ke dalam elemen HTML jumlahCatatan
    jumlahCatatan.innerText = totalCatatan;

    // Percabangan Kondisi: Apakah Catatanya 0?
    if (totalCatatan === 0) {
        // Jika 0: Hapus class "hidden" agar pesan "Tidak ada catatan" muncul
        pesanKosong.classList.remove("hidden");
    } else {
        // Jika > 0: Tambahkan class "hidden" agar pesan "Tidak ada catatan" hilang
        pesanKosong.classList.add("hidden");
    }
}


// Langkah 3 : Membuat Fungsi untuk menambahkan catatan baru
function tambahCatatan() {
    // 3.1 inputCatatan.value -> Mengambil teks yang diketik user di input
    // .trim() -> Menghapus spasi kosong di awal dan akhir teks
    const isiTeks = inputCatatan.value.trim();

    // 3.2 Validasi Input: Jika variabel isiTeks kosong (""), maka tampilkan alert
    if (isiTeks === "") {
        alert("Catatan tidak boleh kosong!");
        return; // Hentikan fungsi jika input kosong
    }

    // 3.3 createElement("li") -> Membuat elemen HTML baru <li> hanya di memori Javascript
    const liBaru = document.createElement("li");
    liBaru.className = "note-item"; // Memberi class agar tampilannya sesuai style CSS

    // 3.4 Mengisi teks catatan baru dengan cara innerHTML mengisi <li> dengan teks dan tombol hapus
    // Tanda Backtick (`) digunakan agar kita bisa menulis teks multi-baris dan menyisipkan variabel dengan ${variabel}
    liBaru.innerHTML = `<span>${isiTeks}</span> <button class="btn-hapus">Hapus</button>`;

    // 3.5 Menambahkan Event Listener pada tombol hapus pada item <li>
    // querySelector(".btn-hapus") -> Mengambil tombol hapus yang baru dibuat di dalam <li>
    const btnHapus = liBaru.querySelector(".btn-hapus");
    btnHapus.addEventListener("click", function(){
        // Menghapus <li> dari daftarCatatan (<ul>)
        liBaru.remove(); // Menghapus elemen <li> dari DOM .remove()
        totalCatatan--; // Mengurangi jumlah catatan    
        perbaruiJumlah(); // Memperbarui tampilan jumlah catatan
        console.log(`DOM  Catatan "${isiTeks}" telah dihapus`);
    })

    // 3.6 .appendChild(liBaru) -> Menempelkan <li> baru ke dalam <ul> daftarCatatan
    daftarCatatan.appendChild(liBaru);

    // 3.7 Mengosongkan input setelah catatan ditambahkan
    inputCatatan.value = "";

    // 3.8 Menambah jumlah catatan dan memperbarui tampilan jumlah catatan
    totalCatatan++;
    perbaruiJumlah();

    console.log(`DOM Catatan baru ditambahkan : "${isiTeks}"`);
}

// Langkah 4 : Event Listener untuk tombol tambah catatan
// Ketika tombol tambah diklik, jalankan fungsi tambahCatatan
btnTambah.addEventListener("click", function(){
    tambahCatatan();
});


// Langkah 5 : Event Listener untuk menambahkan catatan ketika menekan tombol Enter di input
inputCatatan.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        tambahCatatan();
    }
});