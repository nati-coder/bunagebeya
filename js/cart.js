// Shopping Cart System
class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.initializeEventListeners();
        this.updateCartDisplay();
    }

    initializeEventListeners() {
        // Add to cart buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart')) {
                this.addToCart(e.target.closest('.add-to-cart'));
            }
        });

        // Cart icon click
        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) {
            cartIcon.addEventListener('click', () => this.toggleCart());
        }

        // Close cart
        const closeCart = document.querySelector('.close-cart');
        if (closeCart) {
            closeCart.addEventListener('click', () => this.closeCart());
        }

        // Checkout button
        const checkoutBtn = document.querySelector('.checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.checkout());
        }
    }

    addToCart(button) {
        const coffeeCard = button.closest('.coffee-card');
        const productId = coffeeCard.getAttribute('data-id');
        const productName = coffeeCard.querySelector('.coffee-title').textContent;
        const activeUnit = coffeeCard.querySelector('.unit-option.active');
        const unitText = activeUnit.textContent;
        const unitPrice = parseFloat(activeUnit.getAttribute('data-price'));
        const quantity = parseInt(coffeeCard.querySelector('.quantity-input').value);
        
        const item = {
            id: productId,
            name: productName,
            unit: unitText,
            price: unitPrice,
            quantity: quantity,
            image: coffeeCard.querySelector('.coffee-image').style.backgroundImage,
            total: unitPrice * quantity
        };

        // Check if item already exists in cart
        const existingItemIndex = this.items.findIndex(i => i.id === item.id && i.unit === item.unit);
        
        if (existingItemIndex > -1) {
            // Update quantity
            this.items[existingItemIndex].quantity += item.quantity;
            this.items[existingItemIndex].total = this.items[existingItemIndex].price * this.items[existingItemIndex].quantity;
        } else {
            // Add new item
            this.items.push(item);
        }

        this.updateCart();
        utils.showNotification(`Added ${quantity} ${unitText.toLowerCase()} of ${productName} to cart`);
    }

    removeFromCart(itemId, unit) {
        this.items = this.items.filter(item => !(item.id === itemId && item.unit === unit));
        this.updateCart();
        utils.showNotification('Item removed from cart');
    }

    updateQuantity(itemId, unit, newQuantity) {
        const item = this.items.find(i => i.id === itemId && i.unit === unit);
        if (item && newQuantity > 0) {
            item.quantity = newQuantity;
            item.total = item.price * item.quantity;
            this.updateCart();
        }
    }

    updateCart() {
        this.calculateTotal();
        this.updateCartDisplay();
        this.saveToStorage();
    }

    calculateTotal() {
        this.total = this.items.reduce((sum, item) => sum + item.total, 0);
    }

    updateCartDisplay() {
        // Update cart count
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = totalItems;
        });

        // Update cart items in modal
        this.updateCartModal();
    }

    updateCartModal() {
        const cartItemsContainer = document.querySelector('.cart-items');
        const cartTotalElement = document.querySelector('.cart-total span:last-child');
        
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';
            
            if (this.items.length === 0) {
                cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
                cartTotalElement.textContent = 'Birr 0.00';
                return;
            }

            this.items.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <div class="cart-item-image" style="${item.image}"></div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-unit">Unit: ${item.unit}</div>
                        <div class="cart-item-price">Birr ${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="cart-quantity-btn minus">-</button>
                            <input type="text" class="cart-quantity-input" value="${item.quantity}">
                            <button class="cart-quantity-btn plus">+</button>
                        </div>
                        <button class="remove-item">Remove</button>
                    </div>
                `;

                // Add event listeners
                const minusBtn = cartItem.querySelector('.minus');
                const plusBtn = cartItem.querySelector('.plus');
                const quantityInput = cartItem.querySelector('.cart-quantity-input');
                const removeBtn = cartItem.querySelector('.remove-item');

                minusBtn.addEventListener('click', () => {
                    const newQuantity = parseInt(quantityInput.value) - 1;
                    if (newQuantity > 0) {
                        quantityInput.value = newQuantity;
                        this.updateQuantity(item.id, item.unit, newQuantity);
                    }
                });

                plusBtn.addEventListener('click', () => {
                    const newQuantity = parseInt(quantityInput.value) + 1;
                    quantityInput.value = newQuantity;
                    this.updateQuantity(item.id, item.unit, newQuantity);
                });

                quantityInput.addEventListener('change', () => {
                    const newQuantity = parseInt(quantityInput.value);
                    if (newQuantity > 0) {
                        this.updateQuantity(item.id, item.unit, newQuantity);
                    } else {
                        quantityInput.value = item.quantity;
                    }
                });

                removeBtn.addEventListener('click', () => {
                    this.removeFromCart(item.id, item.unit);
                });

                cartItemsContainer.appendChild(cartItem);
            });

            cartTotalElement.textContent = `Birr ${this.total.toFixed(2)}`;
        }
    }

    toggleCart() {
        const cartModal = document.querySelector('.cart-modal');
        if (cartModal) {
            cartModal.classList.toggle('active');
        }
    }

    closeCart() {
        const cartModal = document.querySelector('.cart-modal');
        if (cartModal) {
            cartModal.classList.remove('active');
        }
    }

    checkout() {
        if (this.items.length === 0) {
            utils.showNotification('Your cart is empty');
            return;
        }

        // In a real application, this would redirect to checkout page
        utils.showNotification(`Proceeding to checkout with ${this.items.length} items. Total: Birr ${this.total.toFixed(2)}`);
        this.closeCart();
    }

    saveToStorage() {
        utils.saveToStorage('bunaGebeyaCart', {
            items: this.items,
            total: this.total
        });
    }

    loadFromStorage() {
        const savedCart = utils.loadFromStorage('bunaGebeyaCart');
        if (savedCart) {
            this.items = savedCart.items || [];
            this.total = savedCart.total || 0;
        }
    }

    clearCart() {
        this.items = [];
        this.total = 0;
        this.updateCart();
        utils.showNotification('Cart cleared');
    }
}

// Initialize cart system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.shoppingCart = new ShoppingCart();
});