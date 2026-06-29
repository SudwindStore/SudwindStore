const PRODUCTS = [
  {
    id: 1,
    name: 'Baggy',
    cat: 'Pantalones',
    price: 26500,
    priceOld: null,
    desc: '<strong>Colores y Talles:</strong> Negro (T1 y T3) - Gris (T3).<br><strong>Detalles:</strong> Pantalón baggy, súper cómodo.',
    imgs: ['img/Productos/baggy 1.webp', 'img/Productos/baggy 2.webp', 'img/Productos/baggy 3.webp'],
    colors: ['Negro', 'Gris'],
    sizes: ['T1', 'T3'],
    sizesByColor: {
      'Negro': ['T1', 'T3'],
      'Gris': ['T3']
    }
  },
  {
    id: 2,
    name: 'Body Polera',
    cat: 'Bodys',
    price: 12000,
    priceOld: null,
    desc: 'Body de Morley soft, talle único (cede hasta un t.4)',
    imgs: ['img/Productos/body 1.webp', 'img/Productos/body 2.webp', 'img/Productos/body 3.webp'],
    colors: ['Negro', 'Blanco'],
    sizes: ['Único']
  },
  {
    id: 3,
    name: 'Body Dual',
    cat: 'Bodys',
    price: 9000,
    priceOld: null,
    desc: '<strong>Detalles:</strong> Body dual, diseño exclusivo.<br>⚠️ <strong>¡AGOTADO!</strong>',
    imgs: ['img/Productos/body dual 1.webp', 'img/Productos/body dual 2.webp'],
    colors: [],
    sizes: []
  },
  {
    id: 4,
    name: 'Conjunto Cher',
    cat: 'Conjuntos',
    price: 16000,
    priceOld: null,
    desc: '<strong>Colores:</strong> Negro.<br><strong>Detalles:</strong> Conjunto Cher, lo más pedido de la temporada.',
    imgs: ['img/Productos/conjunto cher 1.webp', 'img/Productos/conjunto cher 2.webp'],
    colors: ['Negro'],
    sizes: ['Único']
  },
  {
    id: 5,
    name: 'Corset Scarlet',
    cat: 'Tops',
    price: 17000,
    priceOld: null,
    desc: 'Corset con tiras regulables y taza armada.Talle 90-95',
    imgs: ['img/Productos/corset scarlet talle 90-95 1.webp'],
    colors: ['Negro'],
    sizes: ['90', '95']
  },
  {
    id: 6,
    name: 'Jogging No Frizado',
    cat: 'Pantalones',
    price: 11000,
    priceOld: null,
    desc: '<strong>Talles y Colores:</strong> Talle 3 (Bordó y Negro).<br><strong>Detalles:</strong> Jogging de media estación, rústico (no frizado). Súper cómodo.',
    imgs: ['img/Productos/joggin no frizado 1.webp', 'img/Productos/joggin no frizado 2.webp'],
    colors: ['Bordó', 'Negro'],
    sizes: ['T3']
  },
  {
    id: 7,
    name: 'Musculosa Puntilla',
    cat: 'Tops',
    price: 7000,
    priceOld: null,
    desc: 'Musculosa puntilla. Talle unico',
    imgs: ['img/Productos/musculosa puntilla.webp'],
    colors: ['Celeste', 'Cremita'],
    sizes: ['Único']
  },
  {
    id: 8,
    name: 'Pack Camiseta Morley',
    cat: 'Remeras/Camisetas',
    price: 21000,
    priceOld: null,
    desc: 'Camiseta Morley+algodón. T.único (ceden hasta un 4)',
    imgs: ['img/Productos/pack x2 1.webp', 'img/Productos/pack x2 2.webp', 'img/Productos/pack x2 3.webp'],
    colors: ['Negro/blanco', 'Marron/blanco', 'Marron/negro'],
    sizes: ['Único']
  },
  {
    id: 9,
    name: 'Poncho Tul',
    cat: 'Tops',
    price: 10000,
    priceOld: null,
    desc: '<strong>Colores:</strong> Marrón y Bordó.<br><strong>Detalles:</strong> Poncho de tul, el complemento perfecto para un look único.',
    imgs: ['img/Productos/poncho tul.webp'],
    colors: ['Marrón', 'Bordó'],
    sizes: ['Único']
  },
  {
    id: 10,
    name: 'Remera Shine',
    cat: 'Remeras/Camisetas',
    price: 8000,
    priceOld: null,
    desc: 'Remera de salir. Talle unico ( Abarca hasta un 2/3)',
    imgs: ['img/Productos/remera shine 1.webp', 'img/Productos/remera shine 2.webp'],
    colors: ['Negro', 'Dorado'],
    sizes: ['Único']
  },
  {
    id: 11,
    name: 'Tops Básicos',
    cat: 'Tops',
    price: 7000,
    priceOld: null,
    desc: 'Top basico',
    imgs: ['img/Productos/remeras basicas tipo 1 1.webp', 'img/Productos/remeras basicas tipo 1 2.webp'],
    colors: ['Marrón'],
    sizes: ['Único']
  },
  {
    id: 12,
    name: 'Remeras Básicas',
    cat: 'Remeras/Camisetas',
    price: 9000,
    priceOld: null,
    desc: 'Remera corta básica.',
    imgs: ['img/Productos/remeras basicas tipo 2 1.webp', 'img/Productos/remeras basicas tipo 2 2.webp'],
    colors: ['Blanco', 'Visón', 'Negro', 'Bordó'],
    sizes: ['Único']
  },
  {
    id: 13,
    name: 'Vestido Silver Night',
    cat: 'Vestidos',
    price: 18000,
    priceOld: null,
    desc: '<strong>Detalles:</strong> Vestido Silver Night para lucir deslumbrante en tus salidas.<br>Consultar colores y talles disponibles.',
    imgs: ['img/Productos/vestido silver night 1.webp', 'img/Productos/vestido silver night 2.webp', 'img/Productos/vestido silver night 3.webp'],
    colors: [],
    sizes: []
  },
  {
    id: 14,
    name: 'Conjunto Dalia',
    cat: 'Conjuntos',
    price: 13000,
    priceOld: null,
    desc: 'Conjuntos súper frescos',
    imgs: ['img/Productos/conjunto dalia 1.webp', 'img/Productos/conjunto dalia 2.webp'],
    colors: ['Celeste', 'Negro', 'Cremita'],
    sizes: ['T2', 'T3', 'T4']
  },
  {
    id: 15,
    name: 'Conjunto Icon',
    cat: 'Conjuntos, Polleras',
    price: 21000,
    priceOld: null,
    desc: '<strong>Colores:</strong> Negro.<br><strong>Detalles:</strong> Conjunto Icon (se vende la pollera por separado también).',
    imgs: ['img/Productos/conjunto icon 1.webp', 'img/Productos/conjunto icon 2.webp'],
    colors: ['Negro'],
    sizes: ['Único']
  },
  {
    id: 16,
    name: 'Set Sunset',
    cat: 'Conjuntos',
    price: 16500,
    priceOld: null,
    desc: '<strong>Talles disponibles:</strong> M<br><strong>Colores:</strong> Negro y Blanco.<br><strong>Detalles:</strong> Set Sunset ideal para este clima.',
    imgs: ['img/Productos/set sunset 1.webp'],
    colors: ['Negro', 'Blanco'],
    sizes: ['M']
  },
  {
    id: 17,
    name: 'Short Blackout Basic',
    cat: 'Shorts',
    price: 7000,
    priceOld: null,
    desc: '<strong>Talle:</strong> Único.<br><strong>Detalles:</strong> Short Blackout Basic, un infaltable.<br>Consultar colores disponibles.',
    imgs: ['img/Productos/short blackout basic 1.webp', 'img/Productos/short blackout basic 2.webp', 'img/Productos/short blackout basic 3.webp'],
    colors: [],
    sizes: ['Único']
  },
  {
    id: 18,
    name: 'Short Blackout',
    cat: 'Shorts',
    price: 20000,
    priceOld: null,
    desc: '<strong>Talles disponibles:</strong> 40<br><strong>Colores:</strong> Consultar colores disponibles.<br><strong>Detalles:</strong> Short Blackout súper cómodo.',
    imgs: ['img/Productos/short blackout talle 40 1.webp'],
    colors: [],
    sizes: ['40']
  },
  {
    id: 19,
    name: 'Short Jean Azul',
    cat: 'Shorts',
    price: 19000,
    priceOld: null,
    desc: '<strong>Talles disponibles:</strong> 38<br><strong>Colores:</strong> Consultar colores disponibles.<br><strong>Detalles:</strong> Short de jean clásico.',
    imgs: ['img/Productos/short jean azul talle 38.webp'],
    colors: ['Azul'],
    sizes: ['38']
  },
  {
    id: 20,
    name: 'Short Jean Celeste',
    cat: 'Shorts',
    price: 19000,
    priceOld: null,
    desc: '<strong>Talles disponibles:</strong> 42 a 46<br><strong>Colores:</strong> Consultar colores disponibles.<br><strong>Detalles:</strong> Short de jean en tono celeste.',
    imgs: ['img/Productos/short jean celeste talle 46-42 1.webp'],
    colors: ['Celeste'],
    sizes: ['42', '44', '46']
  },
  {
    id: 21,
    name: 'Short Jean Negro',
    cat: 'Shorts',
    price: 19000,
    priceOld: null,
    desc: '<strong>Talles disponibles:</strong> 40<br><strong>Colores:</strong> Consultar colores disponibles.<br><strong>Detalles:</strong> Short de jean oscuro.',
    imgs: ['img/Productos/short jean negro talle 40 1.webp'],
    colors: ['Negro'],
    sizes: ['40']
  },
  {
    id: 22,
    name: 'Vestido Black Ivory',
    cat: 'Vestidos',
    price: 9500,
    priceOld: null,
    desc: '<strong>Talles disponibles:</strong> Abarca hasta un 4<br><strong>Colores:</strong> Blanco.<br><strong>Detalles:</strong> Vestido Black Ivory, diseño exclusivo.',
    imgs: ['img/Productos/vestido black ivory 1.webp', 'img/Productos/vestido black ivory 2.webp', 'img/Productos/vestido black ivory 3.webp'],
    colors: ['Blanco'],
    sizes: ['T1', 'T2', 'T3', 'T4']
  },
  {
    id: 23,
    name: 'Vestido Magnolia',
    cat: 'Vestidos',
    price: 13000,
    priceOld: null,
    desc: 'Vestido talle 2 (abarcan hasta un 4)',
    imgs: ['img/Productos/vestido magnolia 1.webp'],
    colors: ['Beige', 'Cremita'],
    sizes: ['T2']
  },
  {
    id: 24,
    name: 'Vestido Sirena',
    cat: 'Vestidos',
    price: 13000,
    priceOld: null,
    desc: '<strong>Talles disponibles:</strong> Abarca hasta un 3<br><strong>Colores:</strong> Blanco.<br><strong>Detalles:</strong> Vestido Sirena espectacular para la noche.',
    imgs: ['img/Productos/vestido sirena 1.webp', 'img/Productos/vestido sirena 2.webp', 'img/Productos/vestido sirena 3.webp'],
    colors: ['Blanco'],
    sizes: ['T1', 'T2', 'T3']
  },
  {
    id: 25,
    name: 'Vestido Tulum',
    cat: 'Vestidos',
    price: 15000,
    priceOld: null,
    desc: 'Vestido playero',
    imgs: ['img/Productos/vestido tulum talle 2 1 .webp'],
    colors: [],
    sizes: ['T1', 'T2']
  },
  {
    id: 26,
    name: 'Vestido Venus',
    cat: 'Vestidos',
    price: 18000,
    priceOld: null,
    desc: 'Vestido de salir. Talle unico',
    imgs: ['img/Productos/vestido venus 1.webp', 'img/Productos/vestido venus 2.webp'],
    colors: [],
    sizes: ['Único']
  },
  {
    id: 27,
    name: 'Brazalete Arena Plateado',
    cat: 'Accesorios',
    price: 6000,
    priceOld: null,
    desc: 'Brazalete plateado regulable',
    imgs: ['img/Productos/brazalete arena plateado 1.webp', 'img/Productos/brazalete arena plateado 2.webp'],
    colors: ['Plateado'],
    sizes: ['Único']
  },
  {
    id: 28,
    name: 'Brazalete Hoja Dorado',
    cat: 'Accesorios',
    price: 6000,
    priceOld: null,
    desc: 'Brazalete dorado regulable',
    imgs: ['img/Productos/brazalete hoja dorado 2.webp', 'img/Productos/brazalete hoja dorado 3.webp'],
    colors: ['Dorado'],
    sizes: ['Único']
  },
  {
    id: 29,
    name: 'Cinto Espiral',
    cat: 'Accesorios',
    price: 8500,
    priceOld: null,
    desc: '<strong>Detalles:</strong> Cinto espiral para darle un toque distinto a tu outfit.',
    imgs: ['img/Productos/cinto espiral 1.webp'],
    colors: [],
    sizes: ['Único']
  },
  {
    id: 30,
    name: 'Cinto Sol',
    cat: 'Accesorios',
    price: 8500,
    priceOld: null,
    desc: '<strong>Detalles:</strong> Cinto sol, un clásico moderno.',
    imgs: ['img/Productos/cinto sol 1 .webp'],
    colors: [],
    sizes: ['Único']
  },
  {
    id: 31,
    name: 'Vestido Print',
    cat: 'Vestidos',
    price: 19000,
    priceOld: null,
    desc: '<strong>Detalles:</strong> Vestido print, súper versátil.<br>Consultar talles disponibles.',
    imgs: ['img/Productos/vestido print 1.webp', 'img/Productos/vestido print 2.webp', 'img/Productos/vestido print 3.webp'],
    colors: [],
    sizes: []
  },
  {
    id: 32,
    name: 'Top Venus',
    cat: 'Tops',
    price: 12000,
    priceOld: null,
    desc: 'Top con lentejuelas. Talle unico',
    imgs: ['img/Productos/top venus 1.webp', 'img/Productos/top venus 2.webp'],
    colors: [],
    sizes: ['Único']
  },
  {
    id: 33,
    name: 'Camiseta Morley',
    cat: 'Remeras/Camisetas',
    price: 12000,
    priceOld: null,
    desc: 'Camiseta Morley+algodón. T.único (ceden hasta un 4)',
    imgs: ['img/Productos/pack x2 2.webp', 'img/Productos/pack x2 3.webp'],
    colors: ['Negro', 'Marrón', 'Blanco'],
    sizes: ['Único']
  },
  {
    id: 34,
    name: 'Camiseta Morley',
    cat: 'Remeras/Camisetas',
    price: 10000,
    priceOld: null,
    desc: 'Talle único.',
    imgs: ['img/Productos/Morley 10000.webp'],
    colors: ['Bordó', 'Blanco'],
    sizes: ['Único']
  },
  {
    id: 35,
    name: 'Pantalón Darlon',
    cat: 'Pantalones',
    price: 15000,
    priceOld: null,
    desc: '<strong>Detalles:</strong> Pantalón Darlon.<br>⚠️ <strong>¡AGOTADO!</strong>',
    imgs: ['img/Productos/pantalon darlon 1.webp'],
    colors: [],
    sizes: ['Único']
  },
  {
    id: 36,
    name: 'Conjunto Aisha',
    cat: 'Conjuntos',
    price: 27000,
    priceOld: null,
    desc: '<strong>Detalles:</strong> Conjunto Aisha.<br>⚠️ <strong>¡AGOTADO!</strong>',
    imgs: ['img/Productos/conjunto aisha 1.webp'],
    colors: [],
    sizes: ['Único']
  },
  {
    id: 37,
    name: 'Camiseta con frunce',
    cat: 'Remeras/Camisetas',
    price: 7000,
    priceOld: null,
    desc: '<strong>Talle:</strong> Único<br><strong>Detalles:</strong> Camiseta con frunce 🔥.<br>⚠️ <strong>¡AGOTADO!</strong>',
    imgs: ['img/Productos/camiseta frunce.webp'],
    colors: [],
    sizes: ['Único']
  },
  {
    id: 38,
    name: 'Body escote cuadrado',
    cat: 'Bodys',
    price: 7000,
    priceOld: null,
    desc: '<strong>Talle:</strong> Único (sede hasta un talle 3)<br><strong>Colores:</strong> Disponible en Negro y Bordó<br><strong>Detalles:</strong> Body manga corta con escote cuadrado. Se adapta genial a la figura.<br>⚠️ <strong>¡AGOTADO!</strong>',
    imgs: ['img/Productos/body escote cuadrado 1.webp'],
    colors: ['Negro', 'Bordó'],
    sizes: ['Único']
  },
  {
    id: 39,
    name: 'Camiseta corta escote cuadrado',
    cat: 'Remeras/Camisetas',
    price: 7000,
    priceOld: null,
    desc: '<strong>Talle:</strong> Único<br><strong>Detalles:</strong> Camiseta corta escote cuadrado 🤎.<br>⚠️ <strong>¡AGOTADO!</strong>',
    imgs: ['img/Productos/camiseta corta escote cuadrado 1.webp'],
    colors: [],
    sizes: ['Único']
  },
  {
    id: 40,
    name: 'Cinto Órbita',
    cat: 'Accesorios',
    price: 8500,
    priceOld: null,
    desc: 'Cinto dorado',
    imgs: ['img/Productos/cinto orbita 1.webp'],
    colors: [],
    sizes: ['Único']
  },
  {
    id: 41,
    name: 'Pollera Moonlight',
    cat: 'Polleras',
    price: 12000,
    priceOld: null,
    desc: 'Mini de lentejuelas. Talle único',
    imgs: ['img/Productos/conjunto icon 1.webp'],
    colors: ['Negro'],
    sizes: ['Único']
  },
  {
    id: 42,
    name: 'Conjunto Tini',
    cat: 'Conjuntos',
    price: 24000,
    priceOld: null,
    desc: 'Color dulce de leche (Talle 42).',
    imgs: ['img/Productos/conjunto dalia 1.webp'],
    colors: ['Dulce de leche'],
    sizes: ['42']
  },
  {
    id: 43,
    name: 'Suéter',
    cat: 'Sueters',
    price: 20000,
    priceOld: null,
    desc: 'Suéter súper calentito.',
    imgs: ['img/Productos/sueter 1.webp'],
    colors: ['Beige'],
    sizes: ['Único']
  },
  {
    id: 44,
    name: 'Jogging Oxford',
    cat: 'Pantalones',
    price: 11000,
    priceOld: null,
    desc: 'Jogging oxford sin friza',
    imgs: ['img/Productos/joggin no frizado 1.webp'],
    colors: ['Negro', 'Bordó'],
    sizes: ['T3']
  },
  {
    id: 45,
    name: 'Cardigan',
    cat: 'Sueters',
    price: 20000,
    priceOld: null,
    desc: '⚠️ <strong>¡AGOTADO!</strong>',
    imgs: ['img/Productos/cardigan 1.webp', 'img/Productos/cardigan 2.webp'],
    colors: [],
    sizes: []
  },
  {
    id: 46,
    name: 'Camiseta Oxford Puntilla',
    cat: 'Remeras/Camisetas',
    price: 12000,
    priceOld: null,
    desc: '',
    imgs: ['img/Productos/camisa oxford puntilla 1.webp', 'img/Productos/camisa oxford puntilla 2.webp'],
    colors: [],
    sizes: []
  },
  {
    id: 47,
    name: 'Top Buche',
    cat: 'Tops',
    price: 8500,
    priceOld: null,
    desc: '⚠️ <strong>¡AGOTADO!</strong>',
    imgs: ['img/Productos/top buche 2.webp', 'img/Productos/top buche 1.webp'],
    colors: [],
    sizes: []
  },
  {
    id: 48,
    name: 'Camiseta con Corpiño',
    cat: 'Remeras/Camisetas',
    price: 13000,
    priceOld: null,
    desc: '⚠️ <strong>¡AGOTADO!</strong>',
    imgs: ['img/Productos/camiseta con corpino 1.webp', 'img/Productos/camiseta con corpino 2.webp'],
    colors: [],
    sizes: []
  },
  {
    id: 49,
    name: 'Body Escote en V Puntilla',
    cat: 'Bodys',
    price: 10000,
    priceOld: null,
    desc: '',
    imgs: ['img/Productos/body escote en v puntilla 1.webp', 'img/Productos/body escote en v puntilla 2.webp'],
    colors: [],
    sizes: []
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
let cart = JSON.parse(localStorage.getItem('aisha_cart')) || [];
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
localStorage.setItem('aisha_cart', JSON.stringify(cart));
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
  
  localStorage.setItem('aisha_cart', JSON.stringify(cart));
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
let favorites = JSON.parse(localStorage.getItem('aisha_favorites')) || [];

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
  localStorage.setItem('aisha_favorites', JSON.stringify(favorites));
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
  localStorage.setItem('aisha_cart', JSON.stringify(cart));
  updateCartCount();
  renderDrawer();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  localStorage.setItem('aisha_cart', JSON.stringify(cart));
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
  window.aishaObserver = observer;
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
    if (window.aishaObserver) setTimeout(() => window.aishaObserver.observe(card), 50);
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
  igBtn.href = 'https://instagram.com/aisha.ssttore';
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
});
