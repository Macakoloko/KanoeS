import os
import requests
import json
import base64
from pathlib import Path

# Configuração da API ImgBB
API_KEY = "943682250db6f6eaec817dae74ad8602" # Chave de API fornecida
API_URL = "https://api.imgbb.com/1/upload"

# Diretório de imagens
IMAGE_DIR = Path("images")

# Função para fazer upload de uma imagem
def upload_image(image_path):
    try:
        with open(image_path, "rb") as file:
            # Codificar a imagem em base64
            image_data = base64.b64encode(file.read())
        
        # Preparar os dados para a requisição
        payload = {
            "key": API_KEY,
            "image": image_data,
            "name": os.path.basename(image_path)
        }
        
        # Fazer a requisição para a API
        response = requests.post(API_URL, payload)
        
        # Verificar se a requisição foi bem-sucedida
        if response.status_code == 200:
            data = response.json()
            if data["success"]:
                print(f"✅ Upload bem-sucedido: {image_path}")
                return {
                    "local_path": str(image_path),
                    "url": data["data"]["url"],
                    "display_url": data["data"]["display_url"],
                    "delete_url": data["data"]["delete_url"]
                }
            else:
                print(f"❌ Erro no upload: {image_path} - {data.get('error', 'Erro desconhecido')}")
        else:
            print(f"❌ Erro na requisição: {image_path} - Status {response.status_code}")
    
    except Exception as e:
        print(f"❌ Exceção durante o upload: {image_path} - {str(e)}")
    
    return None

# Função para processar todas as imagens em um diretório
def process_directory(directory):
    results = []
    image_extensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"]
    
    # Verificar se o diretório existe
    if not os.path.exists(directory):
        print(f"❌ Diretório não encontrado: {directory}")
        return results
    
    # Processar todas as imagens no diretório
    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            if any(file.lower().endswith(ext) for ext in image_extensions):
                result = upload_image(file_path)
                if result:
                    results.append(result)
    
    return results

# Função principal
def main():
    print("🚀 Iniciando upload de imagens para ImgBB...")
    
    # Verificar se a chave de API foi configurada
    if not API_KEY:
        print("❌ Erro: Você precisa configurar uma chave de API do ImgBB.")
        print("   Obtenha uma chave gratuita em https://api.imgbb.com/")
        return
    
    # Processar o diretório de imagens
    results = process_directory(IMAGE_DIR)
    
    # Salvar os resultados em um arquivo JSON
    if results:
        with open("image_uploads.json", "w") as f:
            json.dump(results, f, indent=2)
        
        print(f"✅ Upload concluído! {len(results)} imagens foram enviadas com sucesso.")
        print("📝 Os resultados foram salvos em 'image_uploads.json'")
        
        # Exibir instruções para atualizar o código
        print("\n📋 Próximos passos:")
        print("1. Abra o arquivo 'image_uploads.json' para ver as URLs das imagens")
        print("2. Atualize as referências no código para usar as novas URLs")
        print("   Exemplo: src=\"/images/Equipe/nome.webp\" → src=\"https://i.ibb.co/xxxx/nome\"")
    else:
        print("❌ Nenhuma imagem foi enviada com sucesso.")

if __name__ == "__main__":
    main()