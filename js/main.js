// Main Application
class BunaGebeyaApp {
    constructor() {
        this.init();
    }

    init() {
        this.initializeComponents();
        this.initializeEventListeners();
    }

    initializeComponents() {
        // Initialize all systems
        if (typeof initLanguageSystem === 'function') {
            initLanguageSystem();
        }
        
        // Initialize unit selection system
        this.initializeUnitSelection();
        
        // Initialize mobile menu
        this.initializeMobileMenu();
        
        // Initialize modals
        this.initializeModals();
        
        // Initialize contact form
        this.initializeContactForm();
        
        // Initialize back to top button
        this.initializeBackToTop();

        // Initialize left sidebar filter
        this.initializeLeftSidebarFilter();
    }

    initializeEventListeners() {
        // Search functionality
        this.initializeSearch();
        
        // Close modals when clicking outside
        this.initializeModalCloseHandlers();
    }

    initializeUnitSelection() {
        // This will be called when coffee products are loaded
        // For now, we'll initialize it when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            this.setupUnitSelectionForExistingCards();
        });
    }

    setupUnitSelectionForExistingCards() {
        document.querySelectorAll('.coffee-card').forEach(card => {
            this.setupUnitSelection(card);
        });
    }

    setupUnitSelection(card) {
        const unitOptions = card.querySelectorAll('.unit-option');
        const priceValue = card.querySelector('.price-value');
        const totalValue = card.querySelector('.total-value');
        const quantityInput = card.querySelector('.quantity-input');
        const minusBtn = card.querySelector('.quantity-btn.minus');
        const plusBtn = card.querySelector('.quantity-btn.plus');
        
        if (!unitOptions.length || !priceValue) return;
        
        // Set initial values
        const initialPrice = parseFloat(unitOptions[0].getAttribute('data-price'));
        priceValue.textContent = initialPrice.toFixed(2);
        if (totalValue) {
            totalValue.textContent = (initialPrice * parseInt(quantityInput?.value || 1)).toFixed(2);
        }
        
        // Unit option click handler
        unitOptions.forEach(option => {
            option.addEventListener('click', function() {
                unitOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                const newPrice = parseFloat(this.getAttribute('data-price'));
                priceValue.textContent = newPrice.toFixed(2);
                if (totalValue && quantityInput) {
                    updateTotalPrice();
                }
            });
        });
        
        // Quantity button handlers
        if (minusBtn && quantityInput) {
            minusBtn.addEventListener('click', function() {
                let currentValue = parseInt(quantityInput.value);
                if (currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                    updateTotalPrice();
                }
            });
        }
        
        if (plusBtn && quantityInput) {
            plusBtn.addEventListener('click', function() {
                let currentValue = parseInt(quantityInput.value);
                quantityInput.value = currentValue + 1;
                updateTotalPrice();
            });
        }
        
        // Quantity input change handler
        if (quantityInput) {
            quantityInput.addEventListener('change', function() {
                if (this.value < 1) this.value = 1;
                updateTotalPrice();
            });
        }
        
        const updateTotalPrice = () => {
            const activeUnit = card.querySelector('.unit-option.active');
            const price = parseFloat(activeUnit.getAttribute('data-price'));
            const quantity = parseInt(quantityInput?.value || 1);
            if (totalValue) {
                totalValue.textContent = (price * quantity).toFixed(2);
            }
        };
    }

    initializeMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        const closeSidebar = document.querySelector('.close-sidebar');
        const overlay = document.querySelector('.overlay');

        if (mobileMenuToggle && sidebar) {
            // Open sidebar
            mobileMenuToggle.addEventListener('click', () => {
                sidebar.classList.add('active');
                if (overlay) overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            // Close sidebar
            const closeSidebarFunc = () => {
                sidebar.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            };

            if (closeSidebar) {
                closeSidebar.addEventListener('click', closeSidebarFunc);
            }
            
            if (overlay) {
                overlay.addEventListener('click', closeSidebarFunc);
            }

            // Close sidebar when clicking on a link
            const sidebarLinks = document.querySelectorAll('.sidebar-links a');
            sidebarLinks.forEach(link => {
                link.addEventListener('click', closeSidebarFunc);
            });

            // Close sidebar with Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                    closeSidebarFunc();
                }
            });
        }
    }

    initializeLeftSidebarFilter() {
        const leftSidebarToggle = document.querySelector('.left-sidebar-toggle');
        const leftSidebarFilter = document.querySelector('.left-sidebar-filter');
        const closeLeftSidebar = document.querySelector('.close-left-sidebar');
        const mainContent = document.querySelector('.main-content-with-sidebar');

        if (leftSidebarToggle && leftSidebarFilter) {
            leftSidebarToggle.addEventListener('click', () => {
                leftSidebarFilter.classList.add('active');
                if (mainContent) mainContent.classList.add('sidebar-active');
            });

            const closeLeftSidebarFunc = () => {
                leftSidebarFilter.classList.remove('active');
                if (mainContent) mainContent.classList.remove('sidebar-active');
            };

            if (closeLeftSidebar) {
                closeLeftSidebar.addEventListener('click', closeLeftSidebarFunc);
            }

            // Close sidebar when clicking outside on desktop
            document.addEventListener('click', (e) => {
                if (window.innerWidth > 768) {
                    if (leftSidebarFilter.classList.contains('active') &&
                        !leftSidebarFilter.contains(e.target) && 
                        !leftSidebarToggle.contains(e.target)) {
                        closeLeftSidebarFunc();
                    }
                }
            });

            // Close sidebar with Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && leftSidebarFilter.classList.contains('active')) {
                    closeLeftSidebarFunc();
                }
            });
        }
    }

    initializeModals() {
        // Account Modal
        const accountAction = document.querySelector('.account-action');
        const accountModal = document.querySelector('.account-modal');
        const closeAccount = document.querySelector('.close-account');

        if (accountAction && accountModal) {
            // Open account modal
            accountAction.addEventListener('click', () => {
                accountModal.classList.add('active');
                const overlay = document.querySelector('.overlay');
                if (overlay) overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            // Close account modal
            const closeAccountModal = () => {
                accountModal.classList.remove('active');
                const overlay = document.querySelector('.overlay');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            };

            if (closeAccount) {
                closeAccount.addEventListener('click', closeAccountModal);
            }
        }

        // Wishlist Modal
        const wishlistAction = document.querySelector('.wishlist-action');
        const wishlistModal = document.querySelector('.wishlist-modal');
        const closeWishlist = document.querySelector('.close-wishlist');

        if (wishlistAction && wishlistModal) {
            wishlistAction.addEventListener('click', () => {
                wishlistModal.classList.add('active');
                const overlay = document.querySelector('.overlay');
                if (overlay) overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            if (closeWishlist) {
                closeWishlist.addEventListener('click', () => {
                    wishlistModal.classList.remove('active');
                    const overlay = document.querySelector('.overlay');
                    if (overlay) overlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                });
            }
        }
    }

    initializeSearch() {
        const searchInput = document.querySelector('.search-bar input');
        const searchButton = document.querySelector('.search-bar button');
        const searchSuggestions = document.querySelector('.search-suggestions');

        if (searchInput && searchButton) {
            // Show search suggestions on focus
            searchInput.addEventListener('focus', () => {
                if (searchSuggestions) {
                    searchSuggestions.classList.add('active');
                }
            });

            // Hide search suggestions when clicking outside
            document.addEventListener('click', (e) => {
                if (searchSuggestions && 
                    !searchInput.contains(e.target) && 
                    !searchSuggestions.contains(e.target)) {
                    searchSuggestions.classList.remove('active');
                }
            });

            // Search functionality
            const performSearch = () => {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    if (typeof utils !== 'undefined' && utils.showNotification) {
                        utils.showNotification(`Searching for: ${searchTerm}`);
                    } else {
                        alert(`Searching for: ${searchTerm}`);
                    }
                    // In a real application, you would filter products based on search term
                }
            };

            searchButton.addEventListener('click', performSearch);
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }
    }

    initializeContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                // Basic validation
                if (typeof utils !== 'undefined' && utils.validateEmail) {
                    if (!utils.validateEmail(email)) {
                        utils.showNotification('Please enter a valid email address');
                        return;
                    }
                }
                
                // In a real application, you would send this data to a server
                if (typeof utils !== 'undefined' && utils.showNotification) {
                    utils.showNotification(`Thank you for your message, ${name}! We'll get back to you soon.`);
                } else {
                    alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
                }
                
                // Reset form
                contactForm.reset();
            });
        }
    }

    initializeBackToTop() {
        const backToTopBtn = document.querySelector('.back-to-top');

        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('active');
                } else {
                    backToTopBtn.classList.remove('active');
                }
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    initializeModalCloseHandlers() {
        const overlay = document.querySelector('.overlay');
        
        if (overlay) {
            overlay.addEventListener('click', () => {
                // Close all modals when clicking on overlay
                document.querySelectorAll('.account-modal.active, .wishlist-modal.active, .sidebar.active').forEach(modal => {
                    modal.classList.remove('active');
                });
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }

        // Close modals with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.account-modal.active, .wishlist-modal.active, .sidebar.active, .cart-modal.active').forEach(modal => {
                    modal.classList.remove('active');
                });
                const overlay = document.querySelector('.overlay');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.bunaGebeyaApp = new BunaGebeyaApp();
    
    // Initialize filter system if it exists
    if (typeof FilterSystem !== 'undefined') {
        window.filterSystem = new FilterSystem();
    }
    
    // Initialize cart system if it exists
    if (typeof ShoppingCart !== 'undefined') {
        window.shoppingCart = new ShoppingCart();
    }
});
