// Filter System
class FilterSystem {
    constructor() {
        this.activeFilters = {
            category: [],
            region: [],
            'supplier-type': [],
            'product-type': [],
            variety: [],
            processing: [],
            cultivation: [],
            'min-order': [],
            price: [],
            quick: ['best-sellers']
        };
        
        this.coffeeCards = [];
        this.totalProducts = 0;
        this.init();
    }

    init() {
        this.coffeeCards = document.querySelectorAll('.coffee-card');
        this.totalProducts = this.coffeeCards.length;
        
        this.initializeEventListeners();
        this.updateCounts();
    }

    initializeEventListeners() {
        // Quick Filters
        document.querySelectorAll('.quick-filter').forEach(filter => {
            filter.addEventListener('click', () => this.handleQuickFilter(filter));
        });

        // Checkbox Filters
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.handleCheckboxFilter(checkbox));
        });

        // Price Range Filters
        const priceInputs = document.querySelectorAll('#min-price, #max-price, #mobile-min-price, #mobile-max-price');
        priceInputs.forEach(input => {
            input.addEventListener('input', utils.debounce(() => this.handlePriceFilter(), 500));
        });

        // Apply/Reset Buttons
        document.querySelectorAll('#apply-filters, #mobile-apply-filters').forEach(btn => {
            btn.addEventListener('click', () => this.applyFilters());
        });

        document.querySelectorAll('#reset-filters, #mobile-reset-filters, #clear-all-filters').forEach(btn => {
            btn.addEventListener('click', () => this.resetFilters());
        });

        // Mobile Filter Toggle
        const mobileFilterToggle = document.querySelector('.mobile-filter-toggle');
        if (mobileFilterToggle) {
            mobileFilterToggle.addEventListener('click', () => this.toggleMobileFilters());
        }

        // Coffee Category Filters
        document.querySelectorAll('.coffee-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleCoffeeFilter(btn));
        });
    }

    handleQuickFilter(filter) {
        const value = filter.getAttribute('value');
        
        // Toggle active state
        filter.classList.toggle('active');
        
        // Update active filters
        if (filter.classList.contains('active')) {
            if (!this.activeFilters.quick.includes(value)) {
                this.activeFilters.quick.push(value);
            }
        } else {
            this.activeFilters.quick = this.activeFilters.quick.filter(v => v !== value);
        }
        
        this.applyFilters();
    }

    handleCheckboxFilter(checkbox) {
        const filterType = checkbox.getAttribute('data-filter');
        const value = checkbox.value;
        
        if (checkbox.checked) {
            if (!this.activeFilters[filterType].includes(value)) {
                this.activeFilters[filterType].push(value);
            }
        } else {
            this.activeFilters[filterType] = this.activeFilters[filterType].filter(v => v !== value);
        }
        
        this.updateFilterIndicators();
        this.applyFilters();
    }

    handlePriceFilter() {
        // Clear price checkboxes when manually entering range
        document.querySelectorAll('input[data-filter="price"]').forEach(cb => {
            cb.checked = false;
        });
        
        this.activeFilters.price = [];
        this.applyFilters();
    }

    handleCoffeeFilter(button) {
        // Remove active class from all buttons
        document.querySelectorAll('.coffee-filter-btn').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter coffee cards
        this.coffeeCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        utils.showNotification(`Showing ${filterValue === 'all' ? 'all coffees' : filterValue + ' coffee'}`);
    }

    applyFilters() {
        let visibleCount = 0;
        
        // Get price range values
        const minPrice = document.getElementById('min-price')?.value || document.getElementById('mobile-min-price')?.value;
        const maxPrice = document.getElementById('max-price')?.value || document.getElementById('mobile-max-price')?.value;
        
        // Filter coffee cards
        this.coffeeCards.forEach(card => {
            let showCard = this.shouldShowCard(card, minPrice, maxPrice);
            
            // Show or hide card based on filters
            if (showCard) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        this.updateCounts(visibleCount);
        this.updateActiveFilterTags();
        this.updateFilterIndicators();
        
        if (visibleCount === 0) {
            utils.showNotification('No products match your filters. Try adjusting your criteria.');
        }
    }

    shouldShowCard(card, minPrice, maxPrice) {
        // Check category filters
        if (this.activeFilters.category.length > 0) {
            const cardCategory = card.getAttribute('data-category');
            if (!this.activeFilters.category.includes(cardCategory)) {
                return false;
            }
        }
        
        // Check region filters
        if (this.activeFilters.region.length > 0) {
            const cardRegion = card.getAttribute('data-category');
            if (!this.activeFilters.region.includes(cardRegion)) {
                return false;
            }
        }
        
        // Check supplier type filters
        if (this.activeFilters['supplier-type'].length > 0) {
            const cardSupplier = card.getAttribute('data-supplier');
            if (!this.activeFilters['supplier-type'].includes(cardSupplier)) {
                return false;
            }
        }
        
        // Check price range
        if (minPrice || maxPrice) {
            const cardPrice = 15 + Math.random() * 10; // Demo price
            
            if (minPrice && cardPrice < parseFloat(minPrice)) {
                return false;
            }
            
            if (maxPrice && cardPrice > parseFloat(maxPrice)) {
                return false;
            }
        }
        
        // Check quick filters
        if (this.activeFilters.quick.length > 0) {
            if (this.activeFilters.quick.includes('best-sellers')) {
                // Demo logic for best sellers
                if (Math.random() > 0.3) return false;
            }
            
            if (this.activeFilters.quick.includes('ethiopian')) {
                const cardCountry = card.getAttribute('data-country');
                if (cardCountry !== 'ethiopia') return false;
            }
            
            if (this.activeFilters.quick.includes('verified')) {
                const cardSupplier = card.getAttribute('data-supplier');
                if (cardSupplier !== 'verified') return false;
            }
        }
        
        return true;
    }

    resetFilters() {
        // Uncheck all checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Clear input fields
        document.querySelectorAll('#min-price, #max-price, #mobile-min-price, #mobile-max-price').forEach(input => {
            input.value = '';
        });
        
        // Reset quick filters (except best-sellers)
        document.querySelectorAll('.quick-filter').forEach(filter => {
            if (filter.getAttribute('value') === 'best-sellers') {
                filter.classList.add('active');
            } else {
                filter.classList.remove('active');
            }
        });
        
        // Reset active filters
        this.activeFilters = {
            category: [],
            region: [],
            'supplier-type': [],
            'product-type': [],
            variety: [],
            processing: [],
            cultivation: [],
            'min-order': [],
            price: [],
            quick: ['best-sellers']
        };
        
        // Show all products
        this.coffeeCards.forEach(card => {
            card.style.display = 'block';
        });
        
        this.updateCounts(this.totalProducts);
        this.updateActiveFilterTags();
        this.updateFilterIndicators();
        
        utils.showNotification('All filters have been reset');
    }

    updateCounts(visibleCount = this.totalProducts) {
        document.querySelectorAll('#filtered-count').forEach(el => {
            el.textContent = visibleCount;
        });
        document.querySelectorAll('#total-count').forEach(el => {
            el.textContent = this.totalProducts;
        });
    }

    updateActiveFilterTags() {
        const containers = document.querySelectorAll('#active-filters, #mobile-active-filters');
        let totalActiveFilters = 0;
        
        containers.forEach(container => {
            container.innerHTML = '';
            
            Object.keys(this.activeFilters).forEach(filterType => {
                this.activeFilters[filterType].forEach(value => {
                    if (value && filterType !== 'quick') {
                        const tag = this.createFilterTag(filterType, value);
                        container.appendChild(tag);
                        totalActiveFilters++;
                    }
                });
            });
        });
        
        // Update mobile filter count
        const mobileFilterCount = document.querySelector('#mobile-filter-count');
        if (mobileFilterCount) {
            mobileFilterCount.textContent = totalActiveFilters;
        }
        
        // Show/hide clear all button
        const clearAllBtn = document.querySelector('#clear-all-filters');
        if (clearAllBtn) {
            clearAllBtn.style.display = totalActiveFilters > 0 ? 'block' : 'none';
        }
    }

    createFilterTag(filterType, value) {
        const tag = document.createElement('div');
        tag.classList.add('active-filter-tag');
        
        const displayText = this.getFilterDisplayText(filterType, value);
        
        tag.innerHTML = `
            <span>${displayText}</span>
            <button class="remove-filter" data-filter-type="${filterType}" data-filter-value="${value}">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        const removeBtn = tag.querySelector('.remove-filter');
        removeBtn.addEventListener('click', () => {
            this.removeFilter(filterType, value);
            this.applyFilters();
        });
        
        return tag;
    }

    removeFilter(filterType, filterValue) {
        // Uncheck the corresponding checkbox
        const checkbox = document.querySelector(`input[data-filter="${filterType}"][value="${filterValue}"]`);
        if (checkbox) {
            checkbox.checked = false;
        }
        
        // Remove from active filters
        this.activeFilters[filterType] = this.activeFilters[filterType].filter(val => val !== filterValue);
        
        this.updateFilterIndicators();
    }

    updateFilterIndicators() {
        document.querySelectorAll('.filter-group').forEach(group => {
            const filterType = group.querySelector('input[data-filter]')?.getAttribute('data-filter');
            if (filterType && this.activeFilters[filterType].length > 0) {
                group.classList.add('has-selection');
            } else {
                group.classList.remove('has-selection');
            }
        });
    }

    getFilterDisplayText(filterType, value) {
        const texts = {
            'category': {
                'coffee-beans': 'Coffee Beans',
                'ground-coffee': 'Ground Coffee',
                'capsules': 'Coffee Capsules',
                'instant': 'Instant Coffee'
            },
            'region': {
                'guji': 'Guji Region',
                'harrar': 'Harrar Region',
                'yirgachefe': 'Yirgachefe Region',
                'sidama': 'Sidama Region'
            },
            'supplier-type': {
                'verified': 'Verified Supplier',
                'assurance': 'Trade Assurance',
                'farmer': 'Direct Farmer',
                'cooperative': 'Coffee Cooperative'
            }
        };
        
        return texts[filterType]?.[value] || value;
    }

    toggleMobileFilters() {
        const mobileFilters = document.querySelector('.mobile-filters');
        const filterOverlay = document.querySelector('.filter-overlay');
        
        if (mobileFilters && filterOverlay) {
            mobileFilters.classList.add('active');
            filterOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
}

// Initialize filter system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.filterSystem = new FilterSystem();
});