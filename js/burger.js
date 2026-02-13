/**
 * Datos de productos del menú
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {'burger'|'chicken'|'hotdog'|'extras'} category
 * @property {number} price
 * @property {string} desc
 * @property {string} img
 */

/** @type {Product[]} */
const products = [
  {
    id: 1,
    name: 'The Boss Burger',
    category: 'burger',
    price: 95,
    desc: 'Doble carne, doble queso, tocino crujiente y salsa secreta de la casa.',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Spicy Chicken',
    category: 'burger',
    price: 85,
    desc: 'Pechuga de pollo empanizada, bañada en buffalo y aderezo ranch.',
    img: 'https://images.unsplash.com/photo-1615551309522-28d53380a991?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Alitas (10 pzs)',
    category: 'chicken',
    price: 110,
    desc: 'Bañadas en tu salsa favorita: BBQ, Buffalo, Mango Habanero o Lemon Pepper.',
    img: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Boneless (300g)',
    category: 'chicken',
    price: 120,
    desc: 'Trocitos de pechuga jugosos, sin hueso, listos para dipear.',
    img: 'https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'Jumbo Dog',
    category: 'hotdog',
    price: 65,
    desc: 'Salchicha de res 22cm, tocino, queso gratinado y cebolla caramelizada.',
    img: 'https://images.unsplash.com/photo-1612392062122-cc487002d846?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Tiras de Pollo',
    category: 'chicken',
    price: 90,
    desc: 'Crujientes por fuera, suaves por dentro. Incluye papas.',
    img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    name: 'Papas Gajo',
    category: 'extras',
    price: 45,
    desc: 'Sazonadas con especias cajún.',
    img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    name: 'Aros de Cebolla',
    category: 'extras',
    price: 50,
    desc: 'Empanizado especial de cerveza.',
    img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
];

/**
 * Abre/cierra el menú lateral con overlay.
 * Expone la función de manera global para uso en atributos HTML.
 */
function toggleMenu() {
  const menu = document.getElementById('side-menu');
  const overlay = document.getElementById('menu-overlay');

  if (menu.classList.contains('-translate-x-full')) {
    menu.classList.remove('-translate-x-full');
    menu.classList.add('translate-x-0');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.remove('opacity-0'), 10);
  } else {
    menu.classList.add('-translate-x-full');
    menu.classList.remove('translate-x-0');
    overlay.classList.add('opacity-0');
    setTimeout(() => overlay.classList.add('hidden'), 300);
  }
}
// Exponer globalmente
window.toggleMenu = toggleMenu;

/**
 * Renderiza tarjetas de producto en el grid según categoría.
 * @param {'all'|'burger'|'chicken'|'hotdog'|'extras'} [filter='all']
 */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = filter === 'all' ? products : products.filter((p) => p.category === filter);

  const fallbackImg = 'assets/hero.png';
  filtered.forEach((product) => {
    const card = `
      <div class="card-hover bg-bh-red rounded-3xl overflow-hidden shadow-lg relative group h-full flex flex-col">
        <div class="relative h-48 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-t from-bh-red via-transparent to-transparent z-10 opacity-60"></div>
          <img src="${product.img || fallbackImg}" alt="${product.name}" class="w-full h-full object-cover" loading="lazy" onerror="this.onerror=null; this.src='${fallbackImg}';">
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-bold font-head text-white leading-tight">${product.name}</h3>
            <span class="bg-bh-gold text-bh-dark text-xs font-bold px-2 py-1 rounded ml-2">$${product.price}</span>
          </div>
          <p class="text-pink-100 text-sm mb-6 flex-grow opacity-90">${product.desc}</p>
          <a href="https://wa.me/1234567890?text=Hola,%20quisiera%20pedir%20${encodeURIComponent(product.name)}"
             target="_blank"
             class="w-full block text-center bg-bh-yellow text-bh-dark font-bold py-3 rounded-xl hover:bg-white transition-colors uppercase tracking-wide text-sm">
            <i class="fas fa-cart-plus mr-2"></i> Ordenar
          </a>
        </div>
      </div>
    `;
    grid.insertAdjacentHTML('beforeend', card);
  });
}

/**
 * Cambia la categoría activa y re-renderiza el grid con animación.
 * Expone la función de manera global para uso en atributos HTML.
 * @param {'all'|'burger'|'chicken'|'hotdog'|'extras'} category
 */
function filterMenu(category) {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    if (btn.dataset.category === category) {
      btn.classList.remove('border', 'border-bh-olive', 'text-gray-300');
      btn.classList.add('bg-bh-yellow', 'text-bh-dark', 'font-bold');
    } else {
      btn.classList.add('border', 'border-bh-olive', 'text-gray-300');
      btn.classList.remove('bg-bh-yellow', 'text-bh-dark', 'font-bold');
    }
  });

  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  grid.style.opacity = '0';
  setTimeout(() => {
    renderProducts(category);
    grid.style.opacity = '1';
  }, 300);
}
// Exponer globalmente
window.filterMenu = filterMenu;

/**
 * Inicializa interacción de estrellas y valida formulario de feedback.
 */
function initFeedbackForm() {
  const starContainer = document.getElementById('fb-stars');
  const form = document.getElementById('feedback-form');
  const nameInput = document.getElementById('fb-name');
  const commentInput = document.getElementById('fb-comment');
  const errorEl = document.getElementById('fb-error');
  if (!form) return;

  let rating = 0;
  if (starContainer) {
    const stars = Array.from(starContainer.querySelectorAll('[data-value]'));
    const paint = (value) => {
      stars.forEach((s, i) => {
        const active = i < value;
        s.classList.toggle('text-bh-yellow', active);
        s.setAttribute('aria-checked', String(active));
      });
    };
    const setRating = (value) => {
      rating = value;
      paint(rating);
    };
    stars.forEach((star) => {
      const val = Number(star.dataset.value || '0');
      star.addEventListener('click', () => setRating(val));
      star.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setRating(val);
        }
      });
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValid = !!nameInput?.value?.trim();
    const commentValid = (commentInput?.value?.trim() || '').length >= 10;
    const ratingValid = rating > 0;

    if (nameValid && commentValid && ratingValid) {
      errorEl?.classList.add('hidden');
      alert('¡Gracias por tu opinión! Nos ayuda a mejorar.');
      form.reset();
      rating = 0;
      // limpiar estrellas
      const stars = starContainer ? Array.from(starContainer.querySelectorAll('[data-value]')) : [];
      stars.forEach((s) => {
        s.classList.remove('text-bh-yellow');
        s.setAttribute('aria-checked', 'false');
      });
    } else {
      errorEl?.classList.remove('hidden');
    }
  });
}

// Inicialización general
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  const grid = document.getElementById('menu-grid');
  if (grid) grid.style.transition = 'opacity 0.3s ease-in-out';
  initFeedbackForm();
});
