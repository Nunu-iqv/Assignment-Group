// java.js
function changeTheme() {
    document.body.classList.toggle("light");
}

function validateForm() {
    alert("Review Submitted Successfully!");
    return false;
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
}

// Dropdown toggle for mobile
function toggleDropdown(element) {
    if (window.innerWidth <= 768) {
        element.parentElement.classList.toggle('active');
    }
}

// Close menus when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.main-nav') && !event.target.closest('.mobile-menu-btn')) {
        document.querySelector('.main-nav').classList.remove('active');
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});