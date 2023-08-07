# Python 3.9
# OBTAIN CSV w ARTICLE INFO FOR MULTIPLE SEARCH QUERIES
# Author: Alejandra J. Perea Rojas
# based on a google search, will get articles' information >> csv file
# you can do this for multiple searches, 
# instead of searching, just write the searches
# results will include multiple CSVs with the name of the searches and all the articles compiled

import pandas as pd
import feedparser
import re
import sys
import os
from urllib.parse import quote

class ArticleCompiler():
    def __init__(self):
        self.queries = None
        self.src = None
    
    def initialize(self, queries, src):
        # Read source file and name result directory
        try:
            self.queries = pd.read_csv(queries, sep=',')
        except FileNotFoundError:
            return False
        # Create directory to store CSV files
        if not os.path.exists(src):
            os.makedirs(src)
        self.src = src
        return True

    # Helper function
    # Cleans HTML for description field
    def cleanHTML(self, raw_html):
        cleanr = re.compile('<.*?>')
        cleantext = re.sub(cleanr, '', raw_html)
        return cleantext
    
    # Helper function
    # Reads feed and returns dataframe
    def readFeed(self, tag, rss_url):
        data = []
        # Parse through items of rss_url
        feed = feedparser.parse(rss_url)
        # Loop items in the feed
        for post in feed.entries:
            title = post.title
            link = post.link
            pubDate = "%d/%d/%d" % \
                    (post.published_parsed.tm_mon, \
                    post.published_parsed.tm_mday,\
                    post.published_parsed.tm_year)
            description = self.cleanHTML(post.summary)
            source = post.source.title
            data.append((title, link, pubDate,\
                        description, source, tag))
        return data

    # Converts to CSV and stores it
    def createCSV(self, tag, rss_url, og):
        # Comment out when needed
        # print("Reading now: ", tag, "\n", og)
        path = self.src + "/" + tag + ".csv"
        # Feed dataframe
        df = pd.DataFrame(self.readFeed(tag, rss_url),\
                            columns=('Title','Link','pubDate', 
                                    'Description','Source','Tag'))
        df.drop_duplicates(subset ="Link", keep = False, inplace = True) # Comment out when using different keywords
        df.to_csv(path, encoding='utf-8', index=False)
        # Comment out when needed
        # print(len(df), "Articles saved on", tag + ".csv\n")
    
    # Encode one query and return URLs to be parsed
    def getURL(self, tag, query):
        try:
            rss_url = "https://news.google.com/rss/search?q="
            og_url = "https://news.google.com/search?q="
            url = quote(query) + "&hl=en-US&gl=US&ceid=US%3Aen"
            return tag, rss_url + url , og_url + url
        except TypeError:
            print("Missing query from", tag + ". Stopping now.\n", file=self.log) 
            return None, None, None
    
    def execute(self):
        # For each query, iterate through each row and index
        for q in self.queries.index:
            tag, rss_url, og = self.getURL(self.queries['Tag'][q], self.queries['Query'][q])
            if tag:
                self.createCSV(tag, rss_url, og)
            else:
                return "mission failed"
        return "yay done"
        

if __name__ == "__main__":
    ws = ArticleCompiler()
    if ws.initialize("source.csv","result"):
        print(ws.execute())