// ================= DARK MODE =================
const toggle = document.getElementById('themeToggle');

if (localStorage.theme === 'dark') {
    document.body.classList.add('dark');
}

toggle.onclick = () => {
    document.body.classList.toggle('dark');
    localStorage.theme = document.body.classList.contains('dark')
        ? 'dark'
        : 'light';
};

// ================= HAMBURGER MENU =================
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');

hamburger.onclick = () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
};

menu.querySelectorAll('a').forEach(link => {
    link.onclick = () => {
        menu.style.display = 'none';
    };
});

// ================= MODAL (MULTIPLE & ISOLATED) =================

// Open modal by ID
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Close modal by ID
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking dark overlay
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
