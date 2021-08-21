
import requests

def webscraper(url):
    page = requests.get(url)
    pageContents = page.text
    print(pageContents)

    if "recipe" in pageContents or "ingredient" in pageContents:
        return 1
    else:
        return 0

# First scrape google search results, pagination?
# searchInput = input("Enter your ingredients: ")
# searchItems = searchInput.split()

