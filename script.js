// Fungsi untuk menampilkan waktu real-time dan greeting
function displayRealTime() {
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    let greeting;

    // Menentukan greeting berdasarkan waktu
    if (hour < 12) {
        greeting = "Selamat Pagi!";
    } else if (hour < 18) {
        greeting = "Selamat Siang!";
    } else {
        greeting = "Selamat Malam!";
    }

    // Format waktu menjadi HH:MM:SS
    const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;

    // Menampilkan greeting dan waktu di elemen dengan ID 'greeting' dan 'real-time'
    const greetingElement = document.getElementById('greeting');
    const timeElement = document.getElementById('real-time');

    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
    if (timeElement) {
        timeElement.textContent = `Waktu saat ini: ${timeString}`;
    }
}

// Panggil fungsi displayRealTime setiap detik
setInterval(displayRealTime, 1000);

// Panggil fungsi saat halaman dimuat
window.onload = function () {
    displayRealTime(); // Menampilkan waktu dan greeting saat halaman dimuat

    // Menambahkan navigasi ke elemen dengan ID 'navigation'
    document.getElementById('navigation').innerHTML = `
        <nav>
            <div class="logo">Portofolio Naji</div>
            <ul>
                <li><a href="index.html">Beranda</a></li>
                <li><a href="about.html">Tentang</a></li>
                <li><a href="gallery.html">Galeri</a></li>
                <li><a href="contact.html">Kontak</a></li>
            </ul>
        </nav>
    `;
};