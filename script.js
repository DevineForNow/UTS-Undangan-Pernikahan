const tanggalAcara = new Date("December 20, 2026 08:00:00").getTime();

const hitungMundur = setInterval(function() {
    const sekarang = new Date().getTime();

    const selisih = tanggalAcara - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);

    document.getElementById("hari").innerText = hari;
    document.getElementById("jam").innerText = jam;
    document.getElementById("menit").innerText = menit;
    document.getElementById("detik").innerText = detik;

    if (selisih < 0) {
        clearInterval(hitungMundur);
        document.getElementById("countdown-container").innerHTML = "<h4 class='text-white'>Acara Sedang Berlangsung!</h4>";
    }
}, 1000);

const formRSVP = document.getElementById("rsvpForm");
const notifikasi = document.getElementById("notifikasiRSVP");

formRSVP.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const status = document.getElementById("kehadiran").value;

    notifikasi.innerText = `Terima kasih ${nama}, konfirmasi '${status}' Anda telah berhasil kami terima!`;
    notifikasi.classList.remove("d-none"); 

    formRSVP.reset();
});