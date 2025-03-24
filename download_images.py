import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# URL do site
def download_images(url, folder):
    # Criar pasta se não existir
    if not os.path.exists(folder):
        os.makedirs(folder)

    # Fazer requisição HTTP
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Encontrar todas as tags img
    for img in soup.find_all('img'):
        # Obter URL da imagem
        img_url = img.get('src')
        if img_url:
            # Criar URL absoluta
            img_url = urljoin(url, img_url)
            # Obter nome do arquivo
            filename = os.path.join(folder, os.path.basename(img_url))
            # Fazer download da imagem
            with open(filename, 'wb') as f:
                f.write(requests.get(img_url).content)
            print(f'Downloaded: {filename}')

if __name__ == '__main__':
    download_images('https://kanoe.digital', 'images')