import os
import pandas as pd
import matplotlib.pyplot as plt

def process_and_plot_tables(directory):
    # Configuração para encontrar arquivos .ods
    files = [f for f in os.listdir(directory) if f.endswith('.ods')]
    
    for file in files:
        file_path = os.path.join(directory, file)
        
        # Tentar carregar a aba principal da tabela
        try:
            data = pd.read_excel(file_path, engine='odf', sheet_name='2019', skiprows=6)
        except Exception as e:
            print(f"Erro ao carregar {file}: {e}")
            continue

        # Limpar dados, mantendo apenas as colunas relevantes
        data = data.dropna(how='all')  # Remover linhas completamente vazias
        data = data.iloc[:, :5]  # Ajustar o range conforme necessário
        data.columns = ['Região', 'Total', 'Com Deficiência', 'Sem Deficiência', 'Masculino']  # Ajuste os cabeçalhos conforme necessário

        # Gerar gráfico de barras
        plt.figure(figsize=(10, 6))
        plt.bar(data['Região'], data['Total'], label='Total')
        plt.bar(data['Região'], data['Com Deficiência'], label='Com Deficiência', alpha=0.7)
        plt.bar(data['Região'], data['Sem Deficiência'], label='Sem Deficiência', alpha=0.5)
        
        plt.title(f'Gráfico - {file}')
        plt.xlabel('Região')
        plt.ylabel('Pessoas (em milhares)')
        plt.xticks(rotation=45, ha='right')
        plt.legend()
        plt.tight_layout()
        
        # Salvar o gráfico como PNG
        output_path = os.path.join(directory, f'{os.path.splitext(file)[0]}_grafico.png')
        plt.savefig(output_path)
        plt.close()
        print(f'Gráfico salvo em: {output_path}')

# Substitua o caminho abaixo pelo diretório onde estão os arquivos .ods
directory_path = "tabelas"
process_and_plot_tables(directory_path)
