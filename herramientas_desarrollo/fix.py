import os
import codecs

directory = r'e:\Webs\Aisha Store'
rc = chr(0xFFFD)

replacements = {
    '      >♡</button>': '      </button>',
    'Sorprendéééé': 'Sorprendé',
    f'{rc} Comunidad': '✦ Comunidad',
    f'{rc}{rc}</span>': '🤍</span>',
    f'showToast(\'{rc}{rc}\',': 'showToast(\'🤍\',',
    f'\'>{rc}</button>': '\'>♡</button>',
    f'{rc} Para regalar': '✦ Para regalar',
    f'{rc}{rc} Comprar Gift Card': '🎁 Comprar Gift Card',
    'MS VENDIDO': 'MÁS VENDIDO',
    'No sabs': '¿No sabés',
    f'qu regalar{rc}': 'qué regalar?',
    'ms le gusta': 'más le gusta',
    'Producto agregado': '¡Producto agregado',
    f'<span class="t-icon">{rc}{rc}{rc}</span>': '<span class="t-icon">🤍</span>',
    f'{rc} Somos de Berazategui': '✦ Somos de Berazategui',
    f'encuentro {rc}': 'encuentro ✦',
    f'M{rc}S VENDIDO': 'MÁS VENDIDO'
}

for filename in os.listdir(directory):
    if not filename.endswith('.html'): continue
    filepath = os.path.join(directory, filename)
    
    with codecs.open(filepath, 'r', 'utf-8') as f:
        content = f.read()
        
    for k, v in replacements.items():
        content = content.replace(k, v)
        
    with codecs.open(filepath, 'w', 'utf-8-sig') as f:
        f.write(content)