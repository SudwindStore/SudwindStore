import re
idx_content = open('index.html', 'r', encoding='utf-8').read()

header_match = re.search(r'<!-- -- HEADER -- -->.*?</header>', idx_content, re.DOTALL)
footer_match = re.search(r'<!-- -- FOOTER -- -->.*?</footer>', idx_content, re.DOTALL)

header = header_match.group(0) if header_match else ""
footer = footer_match.group(0) if footer_match else ""

# Replace header links to catalog
header = header.replace('<a href="#">New In</a>', '<a href="catalogo.html?tag=new">New In</a>')
header = header.replace('<a href="#">Conjuntos</a>', '<a href="catalogo.html?cat=Conjuntos">Conjuntos</a>')
header = header.replace('<a href="#">Tops</a>', '<a href="catalogo.html?cat=Tops">Tops</a>')
header = header.replace('<a href="#">Shorts</a>', '<a href="catalogo.html?cat=Shorts">Shorts</a>')
header = header.replace('<a href="#" class="nav-sale">Sale</a>', '<a href="catalogo.html?tag=sale" class="nav-sale">Sale</a>')

header = header.replace('<button class="icon-btn" aria-label="Buscar">', '<a href="catalogo.html?search=focus" class="icon-btn" aria-label="Buscar" style="text-decoration:none;">').replace('</svg>\n      </button>\n      <button class="icon-btn" aria-label="Mi cuenta">', '</svg>\n      </a>\n      <button class="icon-btn" aria-label="Mi cuenta">')

content = f'''<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Catálogo — AISHA STORE</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<style>
.catalog-page {{ max-width: 1440px; margin: 40px auto 80px; padding: 0 40px; min-height: 60vh; }}
.catalog-header {{ text-align: center; margin-bottom: 50px; }}
.catalog-title {{ font-family: var(--font-display); font-size: 3rem; font-weight: 700; color: var(--negro); letter-spacing: -0.01em; margin-bottom: 12px; }}
.catalog-sub {{ font-size: 1rem; color: var(--gris-texto); font-weight: 300; }}

.catalog-bar {{ display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--gris-medio); padding-bottom: 20px; margin-bottom: 40px; gap: 20px; flex-wrap: wrap; }}
.search-wrap {{ display: flex; flex: 1; max-width: 400px; border: 1px solid var(--gris-medio); border-radius: 999px; padding: 10px 18px; align-items: center; gap: 10px; background: var(--crema); transition: border-color 0.2s; }}
.search-wrap:focus-within {{ border-color: var(--rosa-acento); }}
.search-wrap input {{ border: none; background: none; outline: none; width: 100%; font-family: var(--font-body); font-size: 0.85rem; color: var(--negro); }}

.filter-wrap select {{ padding: 10px 20px; border-radius: 999px; border: 1px solid var(--gris-medio); background: var(--blanco); font-family: var(--font-body); font-size: 0.85rem; color: var(--negro); outline: none; cursor: pointer; }}

.empty-state {{ text-align: center; padding: 80px 0; color: var(--gris-texto); display: none; }}
.empty-state h3 {{ font-size: 1.5rem; color: var(--negro); margin-bottom: 10px; font-weight: 600; }}

@media(max-width: 768px) {{
  .catalog-page {{ padding: 0 20px; margin: 30px auto 60px; }}
  .catalog-title {{ font-size: 2.2rem; }}
  .catalog-bar {{ flex-direction: column; align-items: stretch; }}
  .search-wrap {{ max-width: 100%; }}
}}
</style>
</head>
<body>

{header}

<div class="catalog-page">
  <div class="catalog-header">
    <h1 class="catalog-title" id="cat-title">Todo el catálogo</h1>
    <p class="catalog-sub" id="cat-count">Cargando...</p>
  </div>
  
  <div class="catalog-bar">
    <div class="search-wrap">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" id="search-input" placeholder="Buscar por nombre o palabra clave...">
    </div>
    
    <div class="filter-wrap">
      <select id="sort-select">
        <option value="default">Ordenar por Recomendados</option>
        <option value="price-asc">Precio: de menor a mayor</option>
        <option value="price-desc">Precio: de mayor a menor</option>
        <option value="name-asc">Nombre: A - Z</option>
      </select>
    </div>
  </div>

  <div class="prod-grid" id="catalog-grid">
    <!-- Generado con JS -->
  </div>
  
  <div class="empty-state" id="empty-state">
    <h3>No encontramos resultados</h3>
    <p>Intenta con otra palabra clave o vuelve a ver todo el catálogo.</p>
    <a href="catalogo.html" class="btn-agregar" style="max-width:200px; margin:20px auto 0;">Ver todo</a>
  </div>
</div>

{footer}

<!-- TOAST -->
<div class="toast" id="toast">
  <span class="t-icon">🤍</span>
  <span id="toast-msg">¡Producto agregado!</span>
</div>

<script src="js/main.js?v=9"></script>
<script>
document.addEventListener('DOMContentLoaded', () => {{
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  const tag = params.get('tag');
  const doSearch = params.get('search');
  
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  
  if (doSearch === 'focus') {{
    searchInput.focus();
  }}

  if (cat) {{
    document.getElementById('cat-title').textContent = cat;
  }} else if (tag === 'new') {{
    document.getElementById('cat-title').textContent = "New In";
  }} else if (tag === 'sale') {{
    document.getElementById('cat-title').textContent = "Sale";
  }}

  function renderCatalog() {{
    const query = searchInput.value.toLowerCase().trim();
    const sort = sortSelect.value;
    
    let filtered = PRODUCTS.filter(p => {{
      if (cat && p.cat.toLowerCase() !== cat.toLowerCase()) return false;
      if (tag === 'sale' && p.price >= 10000) return false;
      if (query && !p.name.toLowerCase().includes(query) && !p.cat.toLowerCase().includes(query)) return false;
      return true;
    }});

    if (sort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
    else if (sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
    else if (sort === 'name-asc') filtered.sort((a,b) => a.name.localeCompare(b.name));

    document.getElementById('cat-count').textContent = `${{filtered.length}} producto${{filtered.length !== 1 ? 's' : ''}}`;

    const grid = document.getElementById('catalog-grid');
    const empty = document.getElementById('empty-state');
    grid.innerHTML = '';
    
    if (filtered.length === 0) {{
      grid.style.display = 'none';
      empty.style.display = 'block';
    }} else {{
      grid.style.display = 'grid';
      empty.style.display = 'none';
      
      filtered.forEach((p, i) => {{
        const delay = `d${{(i % 4) + 1}}`;
        let badgeHtml = '';
        if (p.priceOld) badgeHtml = `<span class="prod-badge badge-best" style="background:var(--bordo);color:var(--blanco);">SALE</span>`;
        else if (tag === 'new' || i < 2) badgeHtml = `<span class="prod-badge badge-new">NUEVO</span>`;
        
        const card = document.createElement('a');
        card.href = `producto.html?id=${{p.id}}`;
        card.className = `prod-card fade-in ${{delay}} vis`;
        card.style.textDecoration = 'none';
        
        let priceHtml = `<span class="price">${{formatPrice(p.price)}}</span>`;
        if (p.desc.includes('AGOTADO')) {{
             badgeHtml = `<span class="prod-badge badge-best" style="background:var(--bordo);color:var(--blanco);">AGOTADO</span>`;
             priceHtml = `<span class="price" style="text-decoration:line-through;color:var(--gris-texto);">${{formatPrice(p.price)}}</span>`;
        }}

        card.innerHTML = `
          <div class="prod-img-box">
            ${{badgeHtml}}
            <button class="prod-wish" onclick="event.preventDefault(); showToast('🤍', '¡Agregado a favoritos!');">♡</button>
            <img src="${{p.imgs[0]}}" alt="${{p.name}}" loading="lazy" ${{p.desc.includes('AGOTADO') ? 'style="filter:grayscale(1)"' : ''}}>
            <div class="prod-cta">+ Ver detalle</div>
          </div>
          <div class="prod-info">
            <div class="prod-name">${{p.name}}</div>
            <div class="prod-prices">${{priceHtml}}</div>
          </div>
        `;
        grid.appendChild(card);
      }});
    }}
  }}

  searchInput.addEventListener('input', renderCatalog);
  sortSelect.addEventListener('change', renderCatalog);
  renderCatalog();
}});
</script>

<!-- BOTTOM NAV (MOBILE) -->
<nav class="bottom-nav" id="bottom-nav">
  <div class="bottom-nav-inner">
    <a href="index.html" class="bn-item" aria-label="Inicio">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span class="bn-label">Inicio</span>
    </a>
    <a href="catalogo.html" class="bn-item active" aria-label="Catálogo">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
      <span class="bn-label">Catálogo</span>
    </a>
    <a href="catalogo.html?search=focus" class="bn-item" aria-label="Buscar">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></svg>
      <span class="bn-label">Buscar</span>
    </a>
    <button class="bn-item" id="bn-cart" aria-label="Carrito">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <span class="bn-badge" id="bn-cart-count">0</span>
      <span class="bn-label">Carrito</span>
    </button>
  </div>
</nav>

</body>
</html>'''

open('catalogo.html', 'w', encoding='utf-8').write(content)
