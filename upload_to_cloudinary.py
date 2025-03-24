import os
import json
import cloudinary
import cloudinary.uploader
import cloudinary.api
from pathlib import Path

# Configuração do Cloudinary
# Credenciais fornecidas
CLOUD_NAME = "djzjuvfzr" # cloud_name
API_KEY = "518868816814676"    # api_key
API_SECRET = "DyvilD8r9HC96mTUJxhXWN1wJkA" # api_secret

# Diretório de imagens
IMAGE_DIR = Path("images")

# Configurar o Cloudinary
def configure_cloudinary():
    cloudinary.config(
        cloud_name=CLOUD_NAME,
        api_key=API_KEY,
        api_secret=API_SECRET,
        secure=True
    )

# Função para fazer upload de uma imagem
def upload_image(image_path):
    try:
        # Obter o caminho relativo para usar como public_id
        relative_path = os.path.relpath(image_path, start=os.getcwd())
        # Remover a extensão do arquivo para o public_id
        public_id = os.path.splitext(relative_path)[0].replace('\\', '/')
        
        # Fazer o upload para o Cloudinary
        result = cloudinary.uploader.upload(
            image_path,
            public_id=public_id,
            overwrite=True,
            resource_type="auto"
        )
        
        print(f"✅ Upload bem-sucedido: {image_path}")
        return {
            "local_path": str(image_path),
            "public_id": result["public_id"],
            "url": result["url"],
            "secure_url": result["secure_url"],
            "original_filename": result["original_filename"]
        }
    
    except Exception as e:
        print(f"❌ Erro no upload: {image_path} - {str(e)}")
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

# Função para gerar um script de atualização de referências
def generate_update_script(results):
    script_content = """import os
import json
import re

# Carregar os resultados do upload
with open("cloudinary_uploads.json", "r") as f:
    results = json.load(f)

# Criar um dicionário para mapear caminhos locais para URLs seguras
image_map = {}
for result in results:
    local_path = result["local_path"].replace("\\", "/")
    # Remover o diretório atual do caminho para corresponder ao formato usado no código
    if local_path.startswith("./"):
        local_path = local_path[2:]
    image_map[f"/images/{os.path.basename(local_path)}"] = result["secure_url"]
    # Também mapear caminhos de subdiretórios
    if "/" in local_path:
        image_map[f"/{local_path}"] = result["secure_url"]
        image_map[f"/images/{local_path.split('/', 1)[1]}"] = result["secure_url"]

# Função para atualizar referências em um arquivo
def update_file_references(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        original_content = content
        # Procurar por referências a imagens locais
        for local_path, cloud_url in image_map.items():
            # Padrão para encontrar referências de imagem no código
            pattern = f'src=\\"({re.escape(local_path)})\\"'
            content = re.sub(pattern, f'src=\\"{cloud_url}\\"', content)
        
        # Verificar se houve alterações
        if content != original_content:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"✅ Referências atualizadas em: {file_path}")
            return True
        else:
            print(f"ℹ️ Nenhuma referência encontrada em: {file_path}")
            return False
    
    except Exception as e:
        print(f"❌ Erro ao atualizar referências em {file_path}: {str(e)}")
        return False

# Diretórios a serem verificados
directories_to_check = ["app"]

# Extensões de arquivos a serem verificados
file_extensions = [".tsx", ".jsx", ".ts", ".js"]

# Contador de arquivos atualizados
updated_files = 0

# Percorrer os diretórios e atualizar referências
for directory in directories_to_check:
    for root, _, files in os.walk(directory):
        for file in files:
            if any(file.endswith(ext) for ext in file_extensions):
                file_path = os.path.join(root, file)
                if update_file_references(file_path):
                    updated_files += 1

print(f"\n✅ Processo concluído! {updated_files} arquivos foram atualizados.")
"""
    
    # Salvar o script
    with open("update_image_references.py", "w", encoding="utf-8") as f:
        f.write(script_content)
    
    print("✅ Script de atualização de referências gerado: update_image_references.py")

# Função principal
def main():
    print("🚀 Iniciando upload de imagens para Cloudinary...")
    
    # Verificar se as credenciais foram configuradas
    if not CLOUD_NAME or not API_KEY or not API_SECRET:
        print("❌ Erro: Você precisa configurar suas credenciais do Cloudinary.")
        print("   Obtenha suas credenciais em https://cloudinary.com/")
        return
    
    # Configurar o Cloudinary
    configure_cloudinary()
    
    # Processar o diretório de imagens
    results = process_directory(IMAGE_DIR)
    
    # Salvar os resultados em um arquivo JSON
    if results:
        with open("cloudinary_uploads.json", "w") as f:
            json.dump(results, f, indent=2)
        
        print(f"✅ Upload concluído! {len(results)} imagens foram enviadas com sucesso.")
        print("📝 Os resultados foram salvos em 'cloudinary_uploads.json'")
        
        # Gerar script de atualização de referências
        generate_update_script(results)
        
        # Exibir instruções para atualizar o código
        print("\n📋 Próximos passos:")
        print("1. Instale a biblioteca Cloudinary: pip install cloudinary")
        print("2. Configure suas credenciais do Cloudinary no script")
        print("3. Execute o script: python upload_to_cloudinary.py")
        print("4. Execute o script de atualização: python update_image_references.py")
    else:
        print("❌ Nenhuma imagem foi enviada com sucesso.")

if __name__ == "__main__":
    main()