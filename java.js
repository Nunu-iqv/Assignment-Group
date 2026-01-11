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

//-- shawshank.html -- //
// Tab Logic
    function switchTab(evt, tabName) {
        const contents = document.getElementsByClassName("tab-content");
        for (let i = 0; i < contents.length; i++) contents[i].style.display = "none";
        
        const tabs = document.getElementsByClassName("tab-btn");
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
            tabs[i].style.borderBottom = "none";
        }
        
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.style.borderBottom = "3px solid #f5c518";
    }

    // Modal Trailer Logic
    function openTrailerModal() {
        document.getElementById('trailerModal').style.display = 'flex';
        document.getElementById('trailerFrame').src = "https://www.youtube.com/embed/6hB3S9bIaco?autoplay=1";
    }

    function closeTrailerModal() {
        document.getElementById('trailerModal').style.display = 'none';
        document.getElementById('trailerFrame').src = "";
    }

    // Watchlist Logic (Saves to browser memory)
    function toggleLocalWatchlist() {
        const btn = document.getElementById('watchlist-btn');
        if (btn.innerText.includes('+')) {
            btn.innerText = '✓ In Watchlist';
            btn.style.background = '#4CAF50';
            localStorage.setItem('shawshank_saved', 'true');
        } else {
            btn.innerText = '+ Add to Watchlist';
            btn.style.background = '#333';
            localStorage.removeItem('shawshank_saved');
        }
    }

    // Check watchlist on load
    window.onload = () => {
        if(localStorage.getItem('shawshank_saved')) {
            const btn = document.getElementById('watchlist-btn');
            btn.innerText = '✓ In Watchlist';
            btn.style.background = '#4CAF50';
        }
    }
