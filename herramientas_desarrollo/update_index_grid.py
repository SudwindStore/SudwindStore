import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Modify section header
content = content.replace('✦ Recién llegado', '✦ Todo el catálogo')
content = content.replace('Lo <em>nuevo</em>', 'Nuestro <em>catálogo</em>')
content = content.replace('Lo que entró esta semana. Volaron la vez pasada.', 'Explorá todos nuestros ingresos y descubrí tus nuevos favoritos.')

# Remove hardcoded products in prod-grid and add the id
pattern = r'(<div class="prod-grid">)([\s\S]*?)(</div>\s*<div class="view-all">)'
replacement = r'<div class="prod-grid" id="home-catalog-grid"></div>\n  <div class="view-all">'
content = re.sub(pattern, replacement, content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done index.html')
