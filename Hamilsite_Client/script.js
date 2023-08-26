document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start');
    const aboutButton = document.getElementById('about');

      startButton.addEventListener('click', () => {
        window.location.href = 'quiz.html'; // Redirect to the quiz page
      });
    
      aboutButton.addEventListener('click', () => {
        window.location.href = 'about.html'; // Redirect to the about page
      });
    
    const lang = localStorage.getItem('language') || 'en';
    const translationElementIDs = ['welcome', 'description', 'start', 'about'];
    
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

