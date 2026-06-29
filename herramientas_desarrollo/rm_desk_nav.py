import glob
import re

files = glob.glob('*.html')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Remove desk-nav entirely
    content = re.sub(r'<nav class="desk-nav">[\s\S]*?</nav>', '', content)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
print('Done')
