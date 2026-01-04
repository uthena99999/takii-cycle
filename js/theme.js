
document.addEventListener('DOMContentLoaded', () => {
    const themeKey = 'takii_theme';
    const savedTheme = localStorage.getItem(themeKey) || 'default';
    const body = document.body;

    // Function to apply theme
    const applyTheme = (theme) => {
        // Handle CSS file toggle
        let link = document.getElementById('custom-theme-css');
        // Handle legacy id if it exists
        const legacyLink = document.getElementById('maharaja-theme-css');
        if (legacyLink) {
            legacyLink.remove();
        }

        if (theme === 'default') {
            if (link) {
                link.remove();
            }
        } else {
            if (!link) {
                link = document.createElement('link');
                link.id = 'custom-theme-css';
                link.rel = 'stylesheet';
                document.head.appendChild(link);
            }
            link.href = `css/${theme}.css?v=${new Date().getTime()}`;
        }

        // Also keep class for potential helper styles
        body.className = `theme-${theme}`;
    };

    // Apply saved theme on load
    applyTheme(savedTheme);

    // Create Switcher UI
    // We insert it into the .nav-list so it flows with the menu and doesn't cover items.

    // Check if switcher exists
    if (!document.getElementById('themeSelect')) {
        const navList = document.querySelector('.nav-list');
        if (navList) {
            const li = document.createElement('li');
            li.style.display = 'flex'; // Ensure vertical centering
            li.style.alignItems = 'center';

            li.innerHTML = `
                <select id="themeSelect" aria-label="Theme Selector" style="padding: 4px 8px; border-radius: 4px; background: rgba(0,0,0,0.6); color: #fff; border: 1px solid rgba(255,255,255,0.3); font-family: sans-serif; cursor: pointer; font-size: 0.9rem;">
                    <option value="default">Default</option>
                    <option value="maharaja">Maharaja</option>
                    <option value="ghibli">Ghibli</option>
                    <option value="disney">Disney</option>
                    <option value="super_arabian">Super Arabian</option>
                    <option value="europe">Europe</option>
                    <option value="egypt">Egypt</option>
                    <option value="chinese">Chinese</option>
                    <option value="showa">Showa</option>
                    <option value="taisho_roman">Taisho Roman</option>
                    <option value="edo">Edo Period</option>
                    <option value="near_future">Near Future</option>
                </select>
            `;
            navList.appendChild(li);
        }
    }

    // Event Listener
    const select = document.getElementById('themeSelect');
    if (select) {
        select.value = savedTheme;
        select.addEventListener('change', (e) => {
            const newTheme = e.target.value;
            applyTheme(newTheme);
            localStorage.setItem(themeKey, newTheme);
        });
    }
});
