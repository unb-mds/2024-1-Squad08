import requests
from bs4 import BeautifulSoup
from selenium import webdriver
import time

# Objetivo: Atraves do API, extrair cidade e estado preferível pelo usuário.
# Retornar ao API os dados dos anuncios
# Selenium é necessário para carregar o JS da página
# Segundo passo: Extrair o título, preço, descrição, bairro e link de cada anuncio

driver = webdriver.Chrome() # Utilizando o chrome
url= "https://www.webquarto.com.br/busca/republicas/brasilia-df"
driver.maximize_window()
driver.get(url)

time.sleep(5)
content = driver.page_source.encode('utf-8').strip()
soup = BeautifulSoup(content,"html.parser")

quartos = soup.findAll('div', attrs={'class', 'property-card'})

for quarto in quartos:
    titulo = quarto.find('h3', attrs={'class': 'text-overflow text-dark'})
    preco= quarto.find('h5', attrs={'class': 'text-success m-t-0'})
    descricao = quarto.find('p', attrs={'class': 'description font-13 text-muted m-b-0'})
    bairro = quarto.find('p', attrs={'class':'text-muted text-overflow'})
    link = quarto.find('a', attrs={'href':True})

    # Prints para testar o código, na prática, esse código retornará os códigos html de cada um para serem apresentados
    print(titulo.text)
    print(preco.text)
    print(descricao.text)
    print(bairro.text)
    print(link['href'])
    print('\n')

# print(quarto.prettify())

