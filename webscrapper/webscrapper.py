import requests
from bs4 import BeautifulSoup

# Objetivo: Atraves do API, extrair cidade e estado preferível pelo usuário.
# Segundo passo: Extrair o bairro de preferencia, se existir.

base_url ='https://www.webquarto.com.br/busca/quartos/'

# Formatação: cidade-estado

local_user = input('Insira a cidade e estado: ') #Input temporario, não faz parte do proj final
temp = local_user.split()
local = temp[0] +'-'+ temp [1] #Formatação

# Pesquisar o local no site base
resposta = requests.get(base_url + local)
site = BeautifulSoup(resposta.text,'html.parser')
print(site.prettify())

quarto = site.find('div', attrs={'class':'property-card'})
