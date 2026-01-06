document.addEventListener('DOMContentLoaded', () => {
    // Check if scripts loaded
    if (!window.products) {
        console.error('Core scripts failed to load');
        return;
    }

    // DOM Elements
    const grid = document.getElementById('productGrid');
    const filters = document.querySelectorAll('.filter-btn');

    // Render Products
    function renderProducts(category = 'all') {
        grid.innerHTML = '';

        const filtered = category === 'all'
            ? window.products
            : window.products.filter(p => p.category === category);

        filtered.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'product-card fade-in-up';
            card.style.animationDelay = `${index * 0.1}s`; // Staggered animation

            card.innerHTML = `
                <div class="card-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="card-overlay">
                        
                    </div>
                    ${product.category === 'sale' ? '<div style="position:absolute;top:10px;right:10px;background:#ff4444;color:#fff;padding:4px 8px;border-radius:4px;font-weight:bold;font-size:0.8rem;">SALE</div>' : ''}
                </div>
                <div class="card-info">
                    <span class="card-brand">${product.brand}</span>
                    <h3 class="card-title">${product.name}</h3>
                    <p class="card-desc">${product.description}</p>
                    
                    <!-- Specs Display -->
                    ${product.specs ? `
                    <div class="card-specs" style="margin: 0.5rem 0; font-size: 0.9rem; color: var(--color-text-muted);">
                        ${product.specs.size ? `<span style="display:inline-block; margin-right:8px;"><i class="fas fa-ruler-horizontal"></i> ${product.specs.size}</span>` : ''}
                        ${product.specs.gears ? `<span style="display:inline-block;"><i class="fas fa-cog"></i> ${product.specs.gears}</span>` : ''}
                    </div>
                    ` : ''}

                    <div class="card-meta">
                        <div>
                            ${product.originalPrice ? `<span style="text-decoration:line-through;color:#666;font-size:0.9rem;">¥${product.originalPrice.toLocaleString()}</span>` : ''}
                            <span class="card-price" style="${product.category === 'sale' ? 'color:#ff4444' : ''}">
                                ${product.priceDisplay ? product.priceDisplay : '¥' + product.price.toLocaleString()}
                            </span>
                        </div>
                        ${product.category === 'ebike' ? '<span class="badge">Electric</span>' : ''}
                        ${product.category === 'secondhand' ? '<span class="badge">Used</span>' : ''}
                    </div>
                </div>
            `;


            grid.appendChild(card);
        });

        // Re-trigger animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        });
        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    }

    // Filter Event
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.category);
        });
    });

    // Initial Render
    renderProducts();

    // Mobile Menu & Cursor (Simplified version of main.js)
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
            cursorOutline.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 500, fill: "forwards" });
        });
    }

    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});
