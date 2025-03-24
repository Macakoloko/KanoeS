import os
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
            # Padrão para encontrar referências de imagem no código (tag src)
            pattern = f'src=\"({re.escape(local_path)})\"'
            content = re.sub(pattern, f'src=\"{cloud_url}\"', content)
            
            # Padrão para encontrar referências de imagem no código (Next.js Image component)
            next_pattern = f'image=\"({re.escape(local_path)})\"'
            content = re.sub(next_pattern, f'image=\"{cloud_url}\"', content)
            
            # Padrão para imagens em componentes Next.js (formato image={})
            next_pattern2 = f'image={{\"({re.escape(local_path)})\"}}'
            content = re.sub(next_pattern2, f'image={{\"({cloud_url})\"}}', content)
            
            # Padrão para imagens em objetos JavaScript (formato image: "/images/...")
            next_pattern4 = f'image:\s*\"({re.escape(local_path)})\"'
            content = re.sub(next_pattern4, f'image: \"{cloud_url}\"', content)
        
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
