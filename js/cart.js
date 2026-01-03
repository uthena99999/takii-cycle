class ShoppingCart {
    constructor() {
        this.cartItems = JSON.parse(localStorage.getItem('takiiCart')) || [];
        this.cartDrawer = document.querySelector('.cart-drawer');
        this.cartCount = document.querySelector('.cart-count');
        this.cartTotal = document.querySelector('.cart-total');
        this.cartItemsContainer = document.querySelector('.cart-items');

        this.init();
    }

    init() {
        this.renderCart();
        this.updateCartCount();
        this.bindEvents();
    }

    bindEvents() {
        // Open/Close Cart
        const cartBtn = document.querySelector('.cart-btn');
        if (cartBtn) {
            cartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.cartDrawer.classList.add('open');
            });
        }

        const closeBtn = document.querySelector('.close-cart');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.cartDrawer.classList.remove('open');
            });
        }

        const overlay = document.querySelector('.cart-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => {
                this.cartDrawer.classList.remove('open');
            });
        }

        // Checkout
        const checkoutBtn = document.querySelector('.btn-checkout');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                if (this.cartItems.length > 0) {
                    alert('Thanks for your purchase! (Demo)');
                    this.cartItems = [];
                    this.saveCart();
                    this.renderCart();
                    this.cartDrawer.classList.remove('open');
                } else {
                    alert('Your cart is empty.');
                }
            });
        }
    }

    addToCart(productId) {
        // Access global products
        const product = window.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cartItems.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cartItems.push({ ...product, quantity: 1 });
        }

        this.saveCart();
        this.renderCart();
        this.cartDrawer.classList.add('open');
    }

    removeFromCart(productId) {
        this.cartItems = this.cartItems.filter(item => item.id !== productId);
        this.saveCart();
        this.renderCart();
    }

    saveCart() {
        localStorage.setItem('takiiCart', JSON.stringify(this.cartItems));
        this.updateCartCount();
    }

    updateCartCount() {
        const count = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
        if (this.cartCount) {
            this.cartCount.textContent = count;
            // Animate count change
            this.cartCount.classList.add('bump');
            setTimeout(() => this.cartCount.classList.remove('bump'), 300);
        }
    }

    renderCart() {
        if (!this.cartItemsContainer) return;

        this.cartItemsContainer.innerHTML = '';
        let total = 0;

        if (this.cartItems.length === 0) {
            this.cartItemsContainer.innerHTML = '<p style="text-align:center; color:#888; margin-top:2rem;">Your cart is empty.</p>';
        } else {
            this.cartItems.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;

                const cartItemEl = document.createElement('div');
                cartItemEl.className = 'cart-item';
                cartItemEl.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">¥${item.price.toLocaleString()}</p>
                        <div class="cart-item-controls">
                            <span>Qty: ${item.quantity}</span>
                            <button class="btn-remove" data-id="${item.id}">Remove</button>
                        </div>
                    </div>
                `;

                cartItemEl.querySelector('.btn-remove').addEventListener('click', (e) => {
                    this.removeFromCart(e.target.dataset.id);
                });

                this.cartItemsContainer.appendChild(cartItemEl);
            });
        }

        if (this.cartTotal) {
            this.cartTotal.textContent = `¥${total.toLocaleString()}`;
        }
    }
}

// Expose to window
window.ShoppingCart = ShoppingCart;
