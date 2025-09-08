document.addEventListener('DOMContentLoaded', () => {
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        const menu = dropdown.querySelector('.dropdown-menu');

        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Close other open menus
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('show');
                }
            });
            // Toggle current menu
            dropdown.classList.toggle('show');
        });
    });

    // Close dropdowns when clicking outside
    window.addEventListener('click', (e) => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        });
    });

    
    const languageSwitcher = document.querySelector('.language-switcher');
    const currentLangLink = languageSwitcher.querySelector('.nav-link');
    const langMenu = languageSwitcher.querySelector('.dropdown-menu');

    
    const availableLangs = [
        { code: 'en', label: 'EN' },
        { code: 'ua', label: 'UA' },
        { code: 'ru', label: 'RU' },
        { code: 'de', label: 'DE' },
        { code: 'fr', label: 'FR' },
        { code: 'es', label: 'ES' },
        { code: 'it', label: 'IT' }
    ];
const loadMoreBtn = document.getElementById("load-more");
const loader = document.getElementById("loader");
const mainContent = document.querySelector(".main-content");

loadMoreBtn.addEventListener("click", () => {
  loadMoreBtn.style.display = "none";
  loader.style.display = "block";

  
  setTimeout(() => {
    loader.style.display = "none";

    
    for (let i = 1; i <= 3; i++) {
      const newCard = document.createElement("div");
      newCard.classList.add("product-card");
      newCard.innerHTML = `
        <img src="Shady${i}.webp" alt="New Product ${i}">
        <div class="comic-brutal-button-container">
          <button class="comic-brutal-button">
            <div class="button-inner">
              <a href="buy5.html" class="buy5">
                <span class="button-text">buy</span>
              </a>
              <div class="halftone-overlay"></div>
              <div class="ink-splatter"></div>
            </div>
            <div class="button-shadow"></div>
            <div class="button-frame"></div>
          </button>
        </div>
      `;
      mainContent.appendChild(newCard);
    }

    loadMoreBtn.style.display = "inline-block"; 
  }, 2000);
});

    
    const translations = {
        en: {
            catalogue: 'CATALOGUE',
            tshirts: 'T-shirts',
            hoodies: 'Hoodies',
            hats: 'Hats',
            about: 'ABOUT US',
            signup: 'SIGN UP',
            login: 'LOGIN',
            buy: 'BUY'
            
        },
        ua: {
            catalogue: 'КАТАЛОГ',
            tshirts: 'Футболки',
            hoodies: 'Худі',
            hats: 'Кепки',
            about: 'ПРО НАС',
            signup: 'РЕЄСТРАЦІЯ',
            login: 'ВХІД',
            buy: 'КУПИТИ'
            
        },
        ru: {
            catalogue: 'КАТАЛОГ',
            tshirts: 'Футболки',
            hoodies: 'Худи',
            hats: 'Кепки',
            about: 'О НАС',
            signup: 'РЕГИСТРАЦИЯ',
            login: 'ВОЙТИ',
            buy: 'КУПИТЬ'
        },
        de: {
            catalogue: 'KATALOG',
            tshirts: 'T-Shirts',
            hoodies: 'Kapuzenpullover',
            hats: 'Mützen',
            about: 'ÜBER UNS',
            signup: 'REGISTRIEREN',
            login: 'ANMELDEN',
            buy: 'KAUFEN'
        },
        fr: {
            catalogue: 'CATALOGUE',
            tshirts: 'T-shirts',
            hoodies: 'Sweats à capuche',
            hats: 'Casquettes',
            about: 'À PROPOS',
            signup: 'INSCRIPTION',
            login: 'CONNEXION',
            buy: 'ACHETER'
        },
        es: {
            catalogue: 'CATÁLOGO',
            tshirts: 'Camisetas',
            hoodies: 'Sudaderas',
            hats: 'Gorras',
            about: 'SOBRE NOSOTROS',
            signup: 'REGISTRARSE',
            login: 'INICIAR SESIÓN',
            buy: 'COMPRAR'
        },
        it: {
            catalogue: 'CATALOGO',
            tshirts: 'Magliette',
            hoodies: 'Felpe',
            hats: 'Cappelli',
            about: 'CHI SIAMO',
            signup: 'REGISTRATI',
            login: 'ACCEDI',
            buy: 'ACQUISTA'
        }
    };

    // Генерируем пункты меню языков
    langMenu.innerHTML = '';
    availableLangs.forEach(lang => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = lang.label;
        a.setAttribute('data-lang', lang.code);
        li.appendChild(a);
        langMenu.appendChild(li);
    });

    function switchLanguage(lang) {
        // Меню каталог
        document.querySelector('.catalogue-link').textContent = translations[lang].catalogue;
        const catalogueMenu = document.querySelector('.catalogue-link').parentElement.querySelector('.dropdown-menu');
        catalogueMenu.children[0].querySelector('a').textContent = translations[lang].tshirts;
        catalogueMenu.children[1].querySelector('a').textContent = translations[lang].hoodies;
        catalogueMenu.children[2].querySelector('a').textContent = translations[lang].hats;
        // Остальные пункты меню
        const navItems = document.querySelectorAll('.nav-list .nav-item:not(.dropdown)');
        if (navItems.length >= 3) {
            navItems[0].querySelector('.nav-link').textContent = translations[lang].about;
            navItems[1].querySelector('.nav-link').textContent = translations[lang].signup;
            navItems[2].querySelector('.nav-link').textContent = translations[lang].login;
        }
        // Кнопки BUY
        document.querySelectorAll('.buy-button').forEach(btn => {
            btn.textContent = translations[lang].buy;
        });
    }

        // Назначаем обработчики для языков
        langMenu.querySelectorAll('[data-lang]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = e.target.dataset.lang;
                currentLangLink.textContent = lang.toUpperCase();
                switchLanguage(lang);
                languageSwitcher.classList.remove('show');
            });
        });
    });
