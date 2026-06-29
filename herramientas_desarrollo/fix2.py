import os
import codecs

directory = r'e:\Webs\Aisha Store'

replacements = {
    '      >♡</button>': '      </button>',
    'Sorprendéééé': 'Sorprendé',
    '? Comunidad': '✦ Comunidad',
    '??</span>': '🤍</span>',
    'showToast(\'??\',': 'showToast(\'🤍\',',
    '\'>?</button>': '\'>♡</button>',
    '? Para regalar': '✦ Para regalar',
    '?? Comprar Gift Card': '🎁 Comprar Gift Card',
    'MS VENDIDO': 'MÁS VENDIDO',
    'No sabs': '¿No sabés',
    'qu regalar?': 'qué regalar?',
    'ms le gusta': 'más le gusta',
    'Producto agregado': '¡Producto agregado',
    '<span class="t-icon">???</span>': '<span class="t-icon">🤍</span>',
    '? Somos de Berazategui': '✦ Somos de Berazategui',
    'encuentro ?': 'encuentro ✦',
    'M?S VENDIDO': 'MÁS VENDIDO',
    'Puntos de encuentro ?': 'Puntos de encuentro ✦'
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