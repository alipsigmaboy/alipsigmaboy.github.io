function toggleButton() {
    const container = document.querySelector('.toggle-container');
    const body = document.body;
    const emoji = document.querySelector('.emoji');
    
    container.classList.toggle('active');
    body.classList.toggle('dark-mode');
    
    if (container.classList.contains('active')) {
        emoji.textContent = '🌕';
    } else {
        emoji.textContent = '☀️';
    }
}

function showMessage() {
    // Menghasilkan persentase acak antara 0 dan 100
    const percentage = Math.floor(Math.random() * 101);
    
    // Menentukan pesan berdasarkan rentang persentase
    if (percentage >= 83 && percentage <= 100) {
        alert(`Persentase: ${percentage}%\nSelamat anda sudah mewing! +1000 aura`);
    } else if (percentage >= 44 && percentage <= 82) {
        alert(`Persentase: ${percentage}%\nKamu hampir mewing! +500 aura`);
    } else if (percentage >= 0 && percentage <= 43) {
        alert(`Persentase: ${percentage}%\nMaaf anda belum mewing -1000 aura`);
    }
}