import glob
files = glob.glob('*.html')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    content = content.replace('<a href="catalogo.html?tag=new">New In</a>', '<a href="catalogo.html">Ver todo</a>')
    # Also update the hero button in index.html just in case
    content = content.replace('<a href="#newin" class="btn-hero-main">Ver New In &nbsp;→</a>', '<a href="catalogo.html" class="btn-hero-main">Ver todo &nbsp;→</a>')
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
print('Done')
