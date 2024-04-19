# Estudo para extrair dados de produto
# - Obtendo do mercado livre

# Libraries
import requests
from bs4 import BeautifulSoup

# base URl
base_url = 'https://lista.mercadolivre.com.br/'

# Get user input product
product_user = input('Input product to search: ')

# Web scrapping
reponse = requests.get(base_url + product_user)
site = BeautifulSoup(reponse.text, 'html.parser')
products = site.findAll('div', attrs={'class': 'andes-card ui-search-result ui-search-result--core andes-card--flat andes-card--padding-16'})

for product in products:
    # We want to find title, href and price of the product

    title = product.find('h2', attrs={'ui-search-item__title'})
    link = product.find('a', attrs={'class':'ui-search-item__group__element ui-search-link__title-card ui-search-link'})
    price_reais = product.find('span', attrs={'class':'andes-money-amount__fraction'})
    price_cents = product.find('span', attrs={'class':'andes-money-amount__cents andes-money-amount__cents--superscript-24'})

    print('Products title:', title.text)
    print('Products link: ', link['href'])
    print('Products price:', price_reais.text + ',' + price_cents.text)
    print('\n')

    # Could as well find the discount of each product, if exists
