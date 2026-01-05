
document.addEventListener('DOMContentLoaded', () => {
    const themeKey = 'takii_theme';
    // Define available themes
    const themes = [
        { id: 'urban_tech', name: 'Urban Tech' },
        { id: 'maharaja', name: 'Maharaja' },
        { id: 'ghibli', name: 'Ghibli' },
        { id: 'disney', name: 'Disney' },
        { id: 'super_arabian', name: 'Super Arabian' },
        { id: 'europe', name: 'Europe' },
        { id: 'egypt', name: 'Egypt' },
        { id: 'chinese', name: 'Chinese' },
        { id: 'showa', name: 'Showa' },
        { id: 'taisho_roman', name: 'Taisho Roman' },
        { id: 'edo', name: 'Edo Period' },
        { id: 'near_future', name: 'Near Future' }
    ];

    let savedTheme = localStorage.getItem(themeKey);

    // If no theme is saved (first visit), randomly select one to start
    if (!savedTheme) {
        // Default to Edo Period as requested
        savedTheme = 'edo';
        localStorage.setItem(themeKey, savedTheme);
    }

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
            link.href = `css/${theme}.css`;
            // Preload font if needed based on theme could be added here
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

            // Build options dynamically
            const optionsHtml = themes.map(t => `<option value="${t.id}">${t.name}</option>`).join('');

            li.innerHTML = `
                <select id="themeSelect" aria-label="Theme Selector" style="padding: 4px 8px; border-radius: 4px; background: rgba(0,0,0,0.6); color: #fff; border: 1px solid rgba(255,255,255,0.3); font-family: sans-serif; cursor: pointer; font-size: 0.9rem;">
                    ${optionsHtml}
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
