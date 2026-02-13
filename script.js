// script.js
function mulaiUndangan() {
    // Sembunyikan Overlay
    document.getElementById('guest-overlay').style.transform = 'translateY(-100%)';
    
    // Putar Musik
    const music = document.getElementById('weddingMusic');
    music.play();
}

function pindahSection(sectionId, element) {
    // Sembunyikan semua section
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });

    // Tampilkan section yang dipilih
    document.getElementById(sectionId).classList.add('active');

    // Atur tombol navigasi aktif
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');

    // Auto scroll ke atas
    window.scrollTo(0, 0);
}
