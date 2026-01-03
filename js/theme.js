
document.addEventListener('DOMContentLoaded', () => {
    const themeKey = 'takii_theme';
    const savedTheme = localStorage.getItem(themeKey) || 'default';
    const body = document.body;

    // Apply saved theme
    if (savedTheme !== 'default') {
        body.classList.add(`theme-${savedTheme}`);
    }

    // Create Switcher UI if it doesn't exist
    if (!document.querySelector('.theme-switcher')) {
        const switcher = document.createElement('div');
        switcher.className = 'theme-switcher';
        switcher.innerHTML = `
            <select id="themeSelect" aria-label="Theme Selector">
                <option value="default">Default</option>
                <option value="maharaja">Maharaja</option>
            </select>
        `;

        // Append to header (or nav)
        const header = document.querySelector('.header');
        if (header) {
            header.appendChild(switcher);
        }

        // Event Listener
        const select = document.getElementById('themeSelect');
        if (select) {
            select.value = savedTheme;
            select.addEventListener('change', (e) => {
                const newTheme = e.target.value;

                // Remove all theme classes first
                body.classList.remove('theme-maharaja');

                if (newTheme !== 'default') {
                    body.classList.add(`theme-${newTheme}`);
                }

                localStorage.setItem(themeKey, newTheme);
            });
        }
    }
});
