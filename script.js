// Language Switching Functionality for STA Bau Website

document.addEventListener('DOMContentLoaded', function() {
    // Get language toggle elements
    const langEnBtn = document.getElementById('lang-en');
    const langDeBtn = document.getElementById('lang-de');

    /**
     * Switch website language
     * @param {string} lang - Language code ('en' or 'de')
     */
    function switchLanguage(lang) {
        // Get all elements with data-lang attributes
        const enElements = document.querySelectorAll('[data-lang="en"]');
        const deElements = document.querySelectorAll('[data-lang="de"]');

        if (lang === 'en') {
            // Show English content
            enElements.forEach(function(element) {
                element.style.display = 'block';
            });

            // Hide German content
            deElements.forEach(function(element) {
                element.style.display = 'none';
            });

            // Update toggle button states
            langEnBtn.classList.add('active');
            langDeBtn.classList.remove('active');

            // Update document language attribute
            document.documentElement.lang = 'en';
        } else if (lang === 'de') {
            // Hide English content
            enElements.forEach(function(element) {
                element.style.display = 'none';
            });

            // Show German content
            deElements.forEach(function(element) {
                element.style.display = 'block';
            });

            // Update toggle button states
            langDeBtn.classList.add('active');
            langEnBtn.classList.remove('active');

            // Update document language attribute
            document.documentElement.lang = 'de';
        }
    }

    // Add click event listeners to language toggle buttons
    langEnBtn.addEventListener('click', function() {
        switchLanguage('en');
    });

    langDeBtn.addEventListener('click', function() {
        switchLanguage('de');
    });

    // Initialize with English as default (already set in HTML, but ensure consistency)
    switchLanguage('en');
});
