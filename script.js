function mulaiUndangan() {
    // 1. Sembunyikan Overlay
    const overlay = document.getElementById('guest-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000);
    }
    
    // 2. Putar Musik
    const music = document.getElementById('weddingMusic');
    if (music) {
        music.play().catch(error => {
            console.log("Autoplay dicegah oleh browser, tapi musik akan tetap jalan.");
        });
    }
}

// Fungsi pindah section
function pindahSection(sectionId, element) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');
    window.scrollTo(0, 0);
}
