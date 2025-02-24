// Mobile Menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden');
        
        if (isMenuOpen) {
            mobileMenu.classList.add('animate__fadeIn');
            mobileMenu.classList.remove('animate__fadeOut');
        } else {
            mobileMenu.classList.remove('animate__fadeIn');
            mobileMenu.classList.add('animate__fadeOut');
        }
    }

    menuBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && mobileMenu && !mobileMenu.contains(e.target) && !menuBtn?.contains(e.target)) {
            toggleMenu();
        }
    });

    // Close menu when clicking menu items
    const menuLinks = mobileMenu?.querySelectorAll('a');
    menuLinks?.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && isMenuOpen && mobileMenu) {
            toggleMenu();
        }
    });
});



// menu.js
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    let isMenuOpen = false;

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('hidden');
            
            if (isMenuOpen) {
                mobileMenu.classList.add('animate__fadeIn');
                mobileMenu.classList.remove('animate__fadeOut');
            } else {
                mobileMenu.classList.remove('animate__fadeIn');
                mobileMenu.classList.add('animate__fadeOut');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');
            }
        });

        // Close menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');
            }
        });
    }
});