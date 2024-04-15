# Libraries
import requests
from bs4 import BeautifulSoup


page_to_scrape= requests.get("https://g1.globo.com") # Finding the page to scrape
content = page_to_scrape.content
soup = BeautifulSoup(content, 'html.parser') # Soup object

# Variable to store the html content of the class of the news
news = soup.find("div", attrs={"class":"feed-post-body"}) 


title = news.find('a', attrs={'class':'feed-post-link'})
subtile = news.find('div', attrs={'class':"bstn-related"})

print(title.text) # Testing
print(subtile.text) # Subtitle

