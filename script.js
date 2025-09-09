document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    link.addEventListener('click', e => {
      e.preventDefault();
      dropdowns.forEach(other => {
        if (other !== dropdown) other.classList.remove('show');
      });
      dropdown.classList.toggle('show');
    });
  });
  window.addEventListener('click', e => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) dropdown.classList.remove('show');
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
              </div>
            </button>
          </div>`;
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
      jackets: 'Jackets',
      about: 'ABOUT US',
      signup: 'SIGN UP',
      login: 'LOGIN',
      buy: 'BUY',
      loadmore: 'LOAD MORE',
      registerbtn: 'Register',
      loginbtn: 'Login'
    },
    ua: {
      catalogue: 'КАТАЛОГ',
      tshirts: 'Футболки',
      hoodies: 'Худі',
      hats: 'Кепки',
      jackets: 'Куртки',
      about: 'ПРО НАС',
      signup: 'РЕЄСТРАЦІЯ',
      login: 'ВХІД',
      buy: 'КУПИТИ',
      loadmore: 'ПОКАЗАТИ БІЛЬШЕ',
      registerbtn: 'Зареєструватися',
      loginbtn: 'Увійти'
    },
    ru: {
      catalogue: 'КАТАЛОГ',
      tshirts: 'Футболки',
      hoodies: 'Худи',
      hats: 'Кепки',
      jackets: 'Куртки',
      about: 'О НАС',
      signup: 'РЕГИСТРАЦИЯ',
      login: 'ВОЙТИ',
      buy: 'КУПИТЬ',
      loadmore: 'ПОКАЗАТЬ ЕЩЁ',
      registerbtn: 'Зарегистрироваться',
      loginbtn: 'Войти'
    },
    de: {
      catalogue: 'KATALOG',
      tshirts: 'T-Shirts',
      hoodies: 'Kapuzenpullover',
      hats: 'Mützen',
      jackets: 'Jacken',
      about: 'ÜBER UNS',
      signup: 'REGISTRIEREN',
      login: 'ANMELDEN',
      buy: 'KAUFEN',
      loadmore: 'MEHR ANZEIGEN',
      registerbtn: 'Registrieren',
      loginbtn: 'Einloggen'
    },
    fr: {
      catalogue: 'CATALOGUE',
      tshirts: 'T-shirts',
      hoodies: 'Sweats à capuche',
      hats: 'Casquettes',
      jackets: 'Vestes',
      about: 'À PROPOS',
      signup: 'INSCRIPTION',
      login: 'CONNEXION',
      buy: 'ACHETER',
      loadmore: 'AFFICHER PLUS',
      registerbtn: 'S’inscrire',
      loginbtn: 'Se connecter'
    },
    es: {
      catalogue: 'CATÁLOGO',
      tshirts: 'Camisetas',
      hoodies: 'Sudaderas',
      hats: 'Gorras',
      jackets: 'Chaquetas',
      about: 'SOBRE NOSOTROS',
      signup: 'REGISTRARSE',
      login: 'INICIAR SESIÓN',
      buy: 'COMPRAR',
      loadmore: 'MOSTRAR MÁS',
      registerbtn: 'Registrarse',
      loginbtn: 'Entrar'
    },
    it: {
      catalogue: 'CATALOGO',
      tshirts: 'Magliette',
      hoodies: 'Felpe',
      hats: 'Cappelli',
      jackets: 'Giacche',
      about: 'CHI SIAMO',
      signup: 'REGISTRATI',
      login: 'ACCEDI',
      buy: 'ACQUISTA',
      loadmore: 'MOSTRA ALTRO',
      registerbtn: 'Registrati',
      loginbtn: 'Accedi'
    }
  };

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
    document.querySelector('.catalogue-link').textContent = translations[lang].catalogue;
    const catalogueMenu = document.querySelector('.catalogue-link').parentElement.querySelector('.dropdown-menu');
    catalogueMenu.children[0].querySelector('a').textContent = translations[lang].tshirts;
    catalogueMenu.children[1].querySelector('a').textContent = translations[lang].hoodies;
    catalogueMenu.children[2].querySelector('a').textContent = translations[lang].hats;
    catalogueMenu.children[3].querySelector('a').textContent = translations[lang].jackets;

    const navItems = document.querySelectorAll('.nav-list .nav-item:not(.dropdown)');
    if (navItems.length >= 3) {
      navItems[0].querySelector('.nav-link').textContent = translations[lang].about;
      navItems[1].querySelector('.nav-link').textContent = translations[lang].signup;
      navItems[2].querySelector('.nav-link').textContent = translations[lang].login;
    }

    document.querySelectorAll('.button-text').forEach(btn => {
      btn.textContent = translations[lang].buy;
    });

    if (loadMoreBtn) loadMoreBtn.textContent = translations[lang].loadmore;

    const signupTitle = document.querySelector('.signup-title');
    const loginTitle = document.querySelector('.login-title');
    const signupBtn = document.querySelector('.signup-btn');
    const loginBtn = document.querySelector('.login-btn');
    if (signupTitle) signupTitle.textContent = translations[lang].signup;
    if (loginTitle) loginTitle.textContent = translations[lang].login;
    if (signupBtn) signupBtn.textContent = translations[lang].registerbtn;
    if (loginBtn) loginBtn.textContent = translations[lang].loginbtn;
  }

  langMenu.querySelectorAll('[data-lang]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const lang = e.target.dataset.lang;
      currentLangLink.textContent = lang.toUpperCase();
      switchLanguage(lang);
      languageSwitcher.classList.remove('show');
    });
  });

  function openModal(id) {
    document.getElementById(id).style.display = "flex";
  }
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  document.getElementById("open-signup").addEventListener("click", e => {
    e.preventDefault();
    openModal("signup-modal");
  });
  document.getElementById("open-login").addEventListener("click", e => {
    e.preventDefault();
    openModal("login-modal");
  });
  document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => closeModal(btn.dataset.close));
  });
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", e => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });
});
window.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    // Обробник кліку на кнопку
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true'); // зберігаємо вибір
        cookieBanner.style.display = 'none'; // ховаємо банер
    });
});