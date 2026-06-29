import re, os

# Update index.html for Best Sellers (Más vendidos)
index_path = os.path.join('index.html')
with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the section marker and replace the prod-grid block
pattern = r'(?s)(<!-- ══ MÁS VENDIDOS ══ -->.*?<div class="prod-grid">)(.*?)(</div>\s*<div class="view-all">)'
replacement = r'\1<div class="prod-grid" id="best-sellers-grid"></div>\3'
new_content = re.sub(pattern, replacement, content)

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

# Update main.js to add renderBestSellers function and call it
js_path = os.path.join('js', 'main.js')
with open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Insert function before DOMContentLoaded listener (or after renderHomeCatalog)
func_code = '''
// ════════════════════════════════════════
// BEST SELLERS RENDER (Más vendidos)
// ════════════════════════════════════════
function renderBestSellers() {
  const grid = document.getElementById('best-sellers-grid');
  if (!grid) return;
  grid.innerHTML = '';
  // For demo we take the first 6 products as best sellers
  const best = PRODUCTS.slice(0, 6);
  best.forEach((p, i) => {
    const delay = `d${(i % 4) + 1}`;
    let badgeHtml = `<span class="prod-badge badge-best" style="background:var(--negro);color:var(--blanco);">MÁS VENDIDO</span>`;
    const card = document.createElement('a');
    card.href = `producto.html?id=${p.id}`;
    card.className = `prod-card fade-in ${delay}`;
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
}
'''

# Insert after renderHomeCatalog definition (which ends with a closing brace)
js_content = re.sub(r'(function renderHomeCatalog\(\) \{[\s\S]*?\})', r'\1\n' + func_code, js_content)

# Add call to renderBestSellers in DOMContentLoaded listener
js_content = re.sub(r'(document\.addEventListener\('DOMContentLoaded', \(\) => \{[\s\S]*?renderHomeCatalog\(\);)',
                    r'\1\n  renderBestSellers();', js_content)

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print('Done updating Best Sellers')
