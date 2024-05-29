# Automated web scrapper
# Libraries
# openpyxl
import requests
from bs4 import BeautifulSoup
import pandas as pd

table = [] # List for the data

page_to_scrape= requests.get("https://g1.globo.com") # Finding the page to scrape
content = page_to_scrape.content
soup = BeautifulSoup(content, 'html.parser') # Soup object

# Variable to store the html content of the class of the news
newS = soup.findAll("div", attrs={"class":"feed-post-body"}) 

for news in newS:
    title = news.find('a', attrs={'class':'feed-post-link'})
    subtile = news.find('div', attrs={'class':"bstn-related"})

    # If has subtitle
    if(subtile):
        table.append([title.text, subtile.text, title['href']]) # Insert data on this setup
        # title subtile link to news
    else:
        table.append([title.text,'', title['href']])
# Creating Data Frame
dataframe = pd.DataFrame(table, columns=['Title', 'Subtile', 'Link to news'])
dataframe.to_excel('news.xlsx', index=False) # Saving to excel

# print(table)

