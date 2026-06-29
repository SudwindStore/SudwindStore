// Global image error handler to show placeholder for missing images
window.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG') {
    e.target.onerror = null;
    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400"><rect width="300" height="400" fill="%23FFF8F0" stroke="%23C9A96E" stroke-width="2"/><circle cx="150" cy="170" r="30" stroke="%23C9A96E" stroke-width="1.5" fill="none"/><line x1="150" y1="130" x2="150" y2="140" stroke="%23C9A96E" stroke-width="1.5"/><line x1="150" y1="200" x2="150" y2="210" stroke="%23C9A96E" stroke-width="1.5"/><line x1="110" y1="170" x2="120" y2="170" stroke="%23C9A96E" stroke-width="1.5"/><line x1="180" y1="170" x2="190" y2="170" stroke="%23C9A96E" stroke-width="1.5"/><text x="50%" y="260" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="%231A1A1A">SÜDWIND</text><text x="50%" y="290" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="10" letter-spacing="1" fill="%232D2D2D">[Imagen no disponible]</text></svg>';
  }
}, true);

const PRODUCTS = [
  {
    id: 1,
    name: 'Remeras Oversize Negra',
    cat: 'Remeras',
    price: 24000,
    priceOld: null,
    desc: '<strong>Talles y Colores:</strong> Negro (Talles S al L).<br><strong>Detalles:</strong> Remera oversize confeccionada en algodón de alta densidad. Caída perfecta, cuello de rib ancho y calce moderno de hombros caídos.',
    imgs: [
      'img/Productos/remera oversize negra.webp'
    ],
    colors: ['Negro'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 2,
    name: 'Remeras Oversize Blanca',
    cat: 'Remeras',
    price: 24000,
    priceOld: null,
    desc: '<strong>Talles y Colores:</strong> Blanco (Talles S al L).<br><strong>Detalles:</strong> Remera oversize de algodón peinado premium. Confort, frescura y caída estructural ideal para un look casual contemporáneo.',
    imgs: [
      'img/Productos/remera oversize blanca.webp'
    ],
    colors: ['Blanco'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 3,
    name: 'Camiseta Manga Larga Negra',
    cat: 'Remeras',
    price: 28000,
    priceOld: null,
    desc: '<strong>Talles y Colores:</strong> Negro (Talles S al L).<br><strong>Detalles:</strong> Camiseta de manga larga de algodón rib elastizado. Calce cómodo y puños acanalados ajustados. Un básico esencial de media estación.',
    imgs: [
      'img/Productos/camiseta manga larga negra.webp'
    ],
    colors: ['Negro'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 4,
    name: 'Camiseta Manga Larga Blanca',
    cat: 'Remeras',
    price: 28000,
    priceOld: null,
    desc: '<strong>Talles y Colores:</strong> Blanco (Talles S al L).<br><strong>Detalles:</strong> Camiseta clásica de manga larga confeccionada en algodón jersey de tacto ultra suave. Excelente caída y versatilidad.',
    imgs: [
      'img/Productos/camiseta manga larga blanca.webp'
    ],
    colors: ['Blanco'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 5,
    name: 'Remeras Slim Fit Blanca',
    cat: 'Remeras',
    price: 22000,
    priceOld: null,
    desc: '<strong>Talles y Colores:</strong> Blanco (Talles S al L).<br><strong>Detalles:</strong> Remera entallada de algodón pima peruano con elastano. Se adapta suavemente al contorno corporal ofreciendo máxima comodidad y prestancia.',
    imgs: [
      'img/Productos/remera slim fit blanca.webp'
    ],
    colors: ['Blanco'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 6,
    name: 'Remeras Slim Fit Negra',
    cat: 'Remeras',
    price: 22000,
    priceOld: null,
    desc: '<strong>Talles y Colores:</strong> Negro (Talles S al L).<br><strong>Detalles:</strong> Remera de calce slim fit en algodón peinado premium. Costuras reforzadas, suavidad inigualable y cuello clásico redondo.',
    imgs: [
      'img/Productos/remera slim fit negra.webp'
    ],
    colors: ['Negro'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 7,
    name: 'Camisa Manga Larga Negra',
    cat: 'Camisas',
    price: 45000,
    priceOld: null,
    desc: '<strong>Talles y Colores:</strong> Negro (Talles S al L).<br><strong>Detalles:</strong> Camisa sastrera de manga larga en algodón satinado. Calce entallado y cuello rígido italiano, ideal para ocasiones formales.',
    imgs: [
      'img/Productos/camisa negra manga larga.webp'
    ],
    colors: ['Negro'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 8,
    name: 'Camisa Manga Larga Blanca',
    cat: 'Camisas',
    price: 45000,
    priceOld: null,
    desc: '<strong>Talles y Colores:</strong> Blanco (Talles S al L).<br><strong>Detalles:</strong> Camisa formal de manga larga confeccionada en hilado Oxford de algodón premium. Calce estructurado y elegante.',
    imgs: [
      'img/Productos/camisa blanca manga larga.webp'
    ],
    colors: ['Blanco'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 9,
    name: 'Camisa Manga Corta Blanca',
    cat: 'Camisas',
    price: 38000,
    priceOld: null,
    desc: '<strong>Talles y Colores:</strong> Blanco (Talles S al L).<br><strong>Detalles:</strong> Camisa de manga corta de lino y algodón de calce regular. Fresca, casual y de caída fluida para climas cálidos.',
    imgs: [
      'img/Productos/camisa blanca manga corta.webp'
    ],
    colors: ['Blanco'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 10,
    name: 'Camisa Manga Corta Negra',
    cat: 'Camisas',
    price: 38000,
    priceOld: null,
    desc: '<strong>Talles y Colores:</strong> Negro (Talles S al L).<br><strong>Detalles:</strong> Camisa casual de manga corta confeccionada en poplín de algodón. Confortable, ligera y de estilo urbano depurado.',
    imgs: [
      'img/Productos/camisa negra manga corta.webp'
    ],
    colors: ['Negro'],
    sizes: ['S', 'M', 'L']
  }
];

function formatPrice(n) {
  if (n === 0) return 'Consultar precio';
  return '$' + n.toLocaleString('es-AR');
}

// ════════════════════════════════════════
// HEADER & HAMBURGER
// ════════════════════════════════════════
const hdr = document.getElementById('header');
if(hdr) {
  window.addEventListener('scroll', () => {
    hdr.classList.toggle('scrolled', window.scrollY > 30);
  }, {passive:true});
}

const ham = document.getElementById('hamburger');
const mobNav = document.getElementById('mob-nav');
if (ham && mobNav) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mobNav.classList.toggle('open');
  });
  mobNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('open');
      mobNav.classList.remove('open');
    });
  });
}

// ════════════════════════════════════════
// CART LOCALSTORAGE
// ════════════════════════════════════════
let cart = JSON.parse(localStorage.getItem('sudwind_cart')) || [];
// Sincronizar el carrito local con los datos más recientes de PRODUCTS
cart = cart.map(item => {
  const latestProduct = PRODUCTS.find(p => p.id === item.id);
  if (latestProduct) {
    return {
      ...item,
      name: latestProduct.name,
      price: latestProduct.price,
      desc: latestProduct.desc,
      imgs: latestProduct.imgs
    };
  }
  return item;
});
localStorage.setItem('sudwind_cart', JSON.stringify(cart));
let tTimer;

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  const countEl = document.getElementById('cart-count');
  const bnCartCount = document.getElementById('bn-cart-count');
  if (countEl) countEl.textContent = total;
  if (bnCartCount) bnCartCount.textContent = total;
}
updateCartCount();

function bumpCart() {
  const countEl = document.getElementById('cart-count');
  if (!countEl) return;
  countEl.classList.remove('bump');
  void countEl.offsetWidth;
  countEl.classList.add('bump');
}

function showToast(icon, msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerHTML = `<span class="t-icon">${icon}</span><span>${msg}</span>`;
  toast.classList.add('show');
  clearTimeout(tTimer);
  tTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function addToCart(pid, color = null, size = null) {
  const p = PRODUCTS.find(x => x.id === pid);
  if (!p) return;
  
  const existing = cart.find(x => x.id === pid && x.selectedColor === color && x.selectedSize === size);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ 
      ...p, 
      selectedColor: color, 
      selectedSize: size, 
      qty: 1 
    });
  }
  
  localStorage.setItem('sudwind_cart', JSON.stringify(cart));
  updateCartCount();
  bumpCart();
  
  let msgLabel = `"${p.name}"`;
  if (color || size) {
    const opts = [];
    if (color) opts.push(color);
    if (size) opts.push(size);
    msgLabel += ` (${opts.join(' / ')})`;
  }
  showToast('🛍️', `${msgLabel} agregado al carrito`);
}

// ════════════════════════════════════════
// WISHLIST LOGIC
// ════════════════════════════════════════
let favorites = JSON.parse(localStorage.getItem('sudwind_favorites')) || [];

function toggleFavorite(pid) {
  const idx = favorites.indexOf(pid);
  let isFav = false;
  if (idx > -1) {
    favorites.splice(idx, 1);
    showToast('🤍', 'Eliminado de favoritos');
  } else {
    favorites.push(pid);
    showToast('❤️', '¡Agregado a favoritos!');
    isFav = true;
  }
  localStorage.setItem('sudwind_favorites', JSON.stringify(favorites));
  updateWishlistButtons();
  
  if (typeof renderFavoritesGrid === 'function') {
    renderFavoritesGrid();
  }
  return isFav;
}

function updateWishlistButtons() {
  const wishButtons = document.querySelectorAll('.prod-wish');
  wishButtons.forEach(btn => {
    let pid = parseInt(btn.getAttribute('data-id'));
    if (!pid) {
      const card = btn.closest('a');
      if (card) {
        const url = new URL(card.href, window.location.href);
        pid = parseInt(url.searchParams.get('id'));
      }
    }
    
    if (pid) {
      if (!btn.getAttribute('data-id')) {
        btn.setAttribute('data-id', pid);
      }
      
      const isFav = favorites.includes(pid);
      btn.innerHTML = isFav ? '♥' : '♡';
      btn.classList.toggle('active', isFav);
      
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(pid);
      };
    }
  });
}

// ════════════════════════════════════════
// CART DRAWER (estilo 47 Street)
// ════════════════════════════════════════
function buildDrawer() {
  if (document.getElementById('cart-drawer')) return;
  const overlay = document.createElement('div');
  overlay.id = 'drawer-overlay';
  overlay.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:1999;transition:opacity 0.3s;opacity:0;';

  const drawer = document.createElement('div');
  drawer.id = 'cart-drawer';
  drawer.innerHTML = `
    <div class="cd-header">
      <span class="cd-title">Mi carrito (<span id="cd-count">0</span>)</span>
      <button class="cd-close" id="cd-close">×</button>
    </div>
    <div class="cd-items" id="cd-items"></div>
    <div class="cd-footer">
      <div class="cd-total-row"><span>Total</span><span id="cd-total">$0</span></div>
      <a href="carrito.html" class="cd-btn-pay">Ver carrito y pagar</a>
      <button class="cd-btn-keep" id="cd-btn-keep">Seguir comprando</button>
    </div>`;

  document.body.appendChild(overlay);
  document.body.appendChild(drawer);

  document.getElementById('cd-close').addEventListener('click', closeDrawer);
  document.getElementById('cd-btn-keep').addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
}

function openDrawer() {
  renderDrawer();
  const overlay = document.getElementById('drawer-overlay');
  const drawer = document.getElementById('cart-drawer');
  overlay.style.display = 'block';
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    drawer.classList.add('open');
  });
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  const overlay = document.getElementById('drawer-overlay');
  const drawer = document.getElementById('cart-drawer');
  overlay.style.opacity = '0';
  drawer.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { overlay.style.display = 'none'; }, 300);
}

const FREE_SHIPPING = 15000;
function renderDrawer() {
  buildDrawer();
  const itemsEl = document.getElementById('cd-items');
  const countEl2 = document.getElementById('cd-count');
  const totalEl = document.getElementById('cd-total');
  const fillEl = document.getElementById('cd-fill');
  const txtEl = document.getElementById('cd-progress-txt');

  const total = cart.reduce((s, i) => s + i.price * (i.qty || 1), 0);
  const totalQty = cart.reduce((s, i) => s + (i.qty || 1), 0);
  if (countEl2) countEl2.textContent = totalQty;
  if (totalEl) totalEl.textContent = formatPrice(total);

  if (!itemsEl) return;
  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="cd-empty">Tu carrito está vacío.</p>';
    return;
  }

  itemsEl.innerHTML = cart.map((item, idx) => {
    let variantTxt = '';
    if (item.selectedColor || item.selectedSize) {
      const parts = [];
      if (item.selectedColor) parts.push(`Color: ${item.selectedColor}`);
      if (item.selectedSize) parts.push(`Talle: ${item.selectedSize}`);
      variantTxt = `<div class="cd-item-variant" style="font-size: 0.70rem; color: var(--gris-texto); margin-top: 2px;">${parts.join(' | ')}</div>`;
    }
    return `
      <div class="cd-item">
        <a href="producto.html?id=${item.id}"><img src="${item.imgs[0]}" alt="${item.name}" class="cd-item-img"></a>
        <div class="cd-item-info">
          <div class="cd-item-name"><a href="producto.html?id=${item.id}" style="text-decoration: none; color: inherit;">${item.name}</a></div>
          ${variantTxt}
          <div class="cd-item-price" style="margin-top:4px;">${formatPrice(item.price)}</div>
          <div class="cd-item-qty">
            <button class="cd-qty-btn" onclick="changeQty(${idx}, -1)">-</button>
            <span>${item.qty || 1}</span>
            <button class="cd-qty-btn" onclick="changeQty(${idx}, 1)">+</button>
          </div>
        </div>
        <button class="cd-item-del" onclick="removeFromCart(${idx})">×</button>
      </div>`;
  }).join('');
}

function changeQty(idx, delta) {
  if (!cart[idx]) return;
  cart[idx].qty = Math.max(1, (cart[idx].qty || 1) + delta);
  localStorage.setItem('sudwind_cart', JSON.stringify(cart));
  updateCartCount();
  renderDrawer();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  localStorage.setItem('sudwind_cart', JSON.stringify(cart));
  updateCartCount();
  renderDrawer();
}

// Inyectar estilos del drawer
(function injectDrawerStyles() {
  const s = document.createElement('style');
  s.textContent = `
    #cart-drawer {
      position: fixed; top: 0; right: 0; bottom: 0; width: 380px; max-width: 95vw;
      background: #fff; z-index: 2000; display: flex; flex-direction: column;
      transform: translateX(100%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
      box-shadow: -4px 0 40px rgba(0,0,0,0.15);
    }
    #cart-drawer.open { transform: translateX(0); }
    .cd-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 20px 16px; border-bottom: 1px solid #ede8e3; }
    .cd-title { font-size: 1rem; font-weight: 700; color: #1a1a1a; letter-spacing: 0.02em; }
    .cd-close { background: none; border: none; font-size: 1.6rem; cursor: pointer; color: #888; line-height: 1; padding: 0 4px; transition: color 0.2s; }
    .cd-close:hover { color: #1a1a1a; }
    .cd-items { flex: 1; overflow-y: auto; padding: 16px 20px; display: flex; flex-direction: column; gap: 16px; }
    .cd-empty { text-align: center; color: #888; padding: 40px 0; font-size: 0.88rem; }
    .cd-item { display: flex; gap: 14px; align-items: flex-start; position: relative; }
    .cd-item-img { width: 80px; height: 100px; object-fit: cover; border-radius: 6px; flex-shrink: 0; background: #f5f0eb; }
    .cd-item-info { flex: 1; min-width: 0; }
    .cd-item-name { font-size: 0.82rem; font-weight: 600; color: #1a1a1a; margin-bottom: 4px; line-height: 1.3; }
    .cd-item-price { font-size: 0.90rem; font-weight: 700; color: #1a1a1a; margin-bottom: 10px; }
    .cd-item-qty { display: flex; align-items: center; gap: 10px; }
    .cd-qty-btn { width: 26px; height: 26px; border-radius: 50%; border: 1.5px solid #e0d8d0; background: #fff; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #1a1a1a; transition: all 0.2s; }
    .cd-qty-btn:hover { background: #f5f0eb; border-color: #1a1a1a; }
    .cd-item-qty span { font-size: 0.88rem; font-weight: 600; min-width: 20px; text-align: center; }
    .cd-item-del { position: absolute; top: 0; right: 0; background: none; border: none; color: #bbb; font-size: 1.3rem; cursor: pointer; transition: color 0.2s; line-height: 1; padding: 2px; }
    .cd-item-del:hover { color: #c0392b; }
    .cd-footer { padding: 16px 20px 24px; border-top: 1px solid #ede8e3; display: flex; flex-direction: column; gap: 12px; }
    .cd-total-row { display: flex; justify-content: space-between; align-items: center; font-size: 1rem; font-weight: 700; color: #1a1a1a; }
    .cd-btn-pay { display: block; text-align: center; background: #1a1a1a; color: #fff; border: none; border-radius: 8px; padding: 15px; font-size: 0.80rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; text-decoration: none; transition: background 0.2s; }
    .cd-btn-pay:hover { background: #D4849E; }
    .cd-btn-keep { background: #fff; color: #1a1a1a; border: 1.5px solid #e0d8d0; border-radius: 8px; padding: 13px; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.10em; text-transform: uppercase; cursor: pointer; transition: border-color 0.2s; }
    .cd-btn-keep:hover { border-color: #1a1a1a; }
    @media (max-width: 768px) {
      .home-catalog-desktop-only { display: none !important; }
    }
  `;
  document.head.appendChild(s);
})();

buildDrawer();

function initCartEvents() {
  const cartBtn = document.getElementById('cart-btn');
  const bnCartBtn = document.getElementById('bn-cart');

  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer();
    });
  }

  // Bottom nav cart button
  if (bnCartBtn) {
    bnCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer();
    });
  }

  // Update count once elements are ready
  updateCartCount();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCartEvents);
} else {
  initCartEvents();
}

function updateCartBadge() {
  updateCartCount();
  if (document.getElementById('cart-drawer') && document.getElementById('cart-drawer').classList.contains('open')) {
    renderDrawer();
  }
}

// ════════════════════════════════════════
// NEWSLETTER
// ════════════════════════════════════════
function subNL() {
  const emailInput = document.getElementById('nl-email');
  if(!emailInput) return;
  const val = emailInput.value.trim();
  if (!val || !val.includes('@')) return;
  document.getElementById('nl-ok').style.display = 'block';
  emailInput.value = '';
  setTimeout(() => document.getElementById('nl-ok').style.display = 'none', 6000);
}

const emailInput = document.getElementById('nl-email');
if(emailInput) {
  emailInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') subNL();
  });
}

// ════════════════════════════════════════
// ACORDEONES
// ════════════════════════════════════════
function toggleAcc(id) {
  const acc = document.getElementById(id);
  if(!acc) return;
  const isOpen = acc.classList.contains('open');
  document.querySelectorAll('.accordion').forEach(a => a.classList.remove('open'));
  if (!isOpen) acc.classList.add('open');
}

// ════════════════════════════════════════
// INTERSECTION OBSERVER (Animaciones)
// ════════════════════════════════════════
const fades = document.querySelectorAll('.fade-in');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
  });
}, {threshold: 0.10});
fades.forEach(el => obs.observe(el));

// ════════════════════════════════════════
// HERO CAROUSEL LOGIC
// ════════════════════════════════════════
function hideToast() {
  const toast = document.getElementById('toast');
  if (toast) toast.classList.remove('show');
}



function initHeroCarousel() {
  const track = document.getElementById('hero-track');
  if (!track) return;
  const slides = Array.from(track.children);
  const nextButton = document.getElementById('hero-next');
  const prevButton = document.getElementById('hero-prev');
  const dotsContainer = document.getElementById('hero-dots');
  
  if (slides.length <= 1) {
    if (nextButton) nextButton.style.display = 'none';
    if (prevButton) prevButton.style.display = 'none';
    return;
  }

  let currentIdx = 0;
  let autoplayTimer;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(i));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  function updateActiveClasses() {
    slides.forEach((s, i) => {
      if (i === currentIdx) s.classList.add('active');
      else s.classList.remove('active');
    });
    dots.forEach((d, i) => {
      if (i === currentIdx) d.classList.add('active');
      else d.classList.remove('active');
    });
  }

  function moveToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIdx = index;
    updateActiveClasses();
    resetAutoplay();
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => moveToSlide(currentIdx + 1));
  }
  if (prevButton) {
    prevButton.addEventListener('click', () => moveToSlide(currentIdx - 1));
  }

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      moveToSlide(currentIdx + 1);
    }, 6000);
  }
  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  // SWIPE TÁCTIL (mobile)
  let touchStartX = 0;
  let touchEndX = 0;
  const heroSection = document.getElementById('hero-section');
  heroSection.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  heroSection.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) { // mínimo 50px para contar como swipe
      if (diff > 0) moveToSlide(currentIdx + 1); // swipe izquierda = siguiente
      else moveToSlide(currentIdx - 1);           // swipe derecha = anterior
    }
  }, { passive: true });

  // Initialize
  slides[0].classList.add('active');
  startAutoplay();
}

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target); // Animación de una sola vez
      }
    });
  }, observerOptions);

  // Observamos elementos actuales
  document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));
  
  // Guardamos el observer globalmente para usarlo en contenido dinámico
  window.sudwindObserver = observer;
}

// ════════════════════════════════════════
// HOME CATALOG RENDER
// ════════════════════════════════════════
function renderHomeCatalog() {
  const grid = document.getElementById('home-catalog-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  PRODUCTS.slice(0, 8).forEach((p, i) => {
    const delay = `d${(i % 4) + 1}`;
    let badgeHtml = '';
    if (i < 4) badgeHtml = `<span class="prod-badge badge-new">NUEVO</span>`; // Primeros 4 con badge NUEVO
    
    const card = document.createElement('a');
    card.href = `producto.html?id=${p.id}`;
    card.className = `prod-card fade-in ${delay}`;
    if (i >= 6) card.classList.add('home-catalog-desktop-only');
    if (window.sudwindObserver) setTimeout(() => window.sudwindObserver.observe(card), 50);
    card.style.textDecoration = 'none';
    
    let priceHtml = `<span class="price">${formatPrice(p.price)}</span>`;
    if (p.desc.includes('AGOTADO')) {
         badgeHtml = `<span class="prod-badge badge-best" style="background:var(--bordo);color:var(--blanco);">AGOTADO</span>`;
         priceHtml = `<span class="price" style="text-decoration:line-through;color:var(--gris-texto);">${formatPrice(p.price)}</span>`;
    }

    card.innerHTML = `
      <div class="prod-img-box">
        ${badgeHtml}
        <button class="prod-wish" onclick="event.preventDefault(); showToast('🤍', '¡Agregado a favoritos!');">♡</button>
        <img src="${p.imgs[0]}" alt="${p.name}" loading="lazy" ${p.desc.includes('AGOTADO') ? 'style="filter:grayscale(1)"' : ''}>
        <div class="prod-cta">+ Ver detalle</div>
      </div>
      <div class="prod-info">
        <div class="prod-name">${p.name}</div>
        <div class="prod-prices">${priceHtml}</div>
      </div>
    `;
    grid.appendChild(card);
  });
  updateWishlistButtons();
}

document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  initScrollAnimations();
  renderHomeCatalog();
  updateWishlistButtons();

  // ════════════════════════════════════════
  // FLOATING INSTAGRAM BUTTON
  // ════════════════════════════════════════
  const igBtn = document.createElement('a');
  igBtn.href = 'https://www.instagram.com/sudwind.ar/';
  igBtn.target = '_blank';
  igBtn.ariaLabel = 'Visitanos en Instagram';
  igBtn.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 1500;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    text-decoration: none;
  `;
  igBtn.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;
  
  igBtn.addEventListener('mouseenter', () => {
    igBtn.style.transform = 'scale(1.08) translateY(-3px)';
    igBtn.style.boxShadow = '0 8px 16px rgba(0,0,0,0.4)';
  });
  igBtn.addEventListener('mouseleave', () => {
    igBtn.style.transform = 'scale(1) translateY(0)';
    igBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  });

  // En mobile, ajustar la posición para que no se solape con el bottom nav
  function adjustIgBtnPos() {
    if (window.innerWidth <= 768) {
      igBtn.style.bottom = '72px';
      igBtn.style.right = '16px';
      igBtn.style.width = '44px';
      igBtn.style.height = '44px';
    } else {
      igBtn.style.bottom = '24px';
      igBtn.style.right = '24px';
      igBtn.style.width = '56px';
      igBtn.style.height = '56px';
    }
  }
  adjustIgBtnPos();
  window.addEventListener('resize', adjustIgBtnPos);

  document.body.appendChild(igBtn);

  // ════════════════════════════════════════
  // ALTERNATING NAME PLACEHOLDER
  // ════════════════════════════════════════
  const nameInputs = document.querySelectorAll('#prof-name, #chk-name');
  if (nameInputs.length > 0) {
    const names = ['Ej: César Augusto', 'Ej: Julio César'];
    const lastToggle = localStorage.getItem('namePhToggle') || '0';
    const nextToggle = lastToggle === '0' ? 1 : 0;
    nameInputs.forEach(input => input.placeholder = names[nextToggle]);
    localStorage.setItem('namePhToggle', nextToggle.toString());
  }
});
