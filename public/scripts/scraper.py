
import requests, sys,time

page = requests.get(sys.argv[1])
pageContents = page.text
if "recipe" in pageContents or "ingredient" in pageContents:
    print(1)
else:
    print(0)


