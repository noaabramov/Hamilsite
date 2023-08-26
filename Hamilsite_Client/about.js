document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back');
  
      backButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to the homepage
      });

    const lang = localStorage.getItem('language') || 'en';
    const translationElementIDs = ['subtitle', 'musical','impact', 'themes', 'back'];
    
    fetch('translations.json')
        .then(response => response.json())
        .then(translations => {
        translationElementIDs.forEach(id => {
            const translation = translations[id][lang];
            document.querySelector(`.${id}`).textContent = translation;
        });
        });
    
    const langSwitcher = document.getElementById('languageSwitcher');
    langSwitcher.value = lang;
    langSwitcher.addEventListener('change', () => {
        const selectedLang = langSwitcher.value;
        localStorage.setItem('language', selectedLang);
        location.reload();
    
    });
    
});

