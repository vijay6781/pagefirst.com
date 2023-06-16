import playwright
import csv

def scrape_company_details(G2crowd_URL):
  """Scrape the contents of a company's details from G2Crowd.

  Args:
    G2crowd_URL: The URL of the company's G2Crowd page.

  Returns:
    A dictionary containing the company's details.
  """

  browser = playwright.chromium.Browser()
  page = await browser.new_page()
  await page.goto(G2crowd_URL)

  # Get the company's name.
  company_name = await page.query_selector('h1[data-qa="company-name"]')
  company_name = await company_name.text()

  # Get the company's rating.
  company_rating = await page.query_selector('.rating-score')
  company_rating = await company_rating.text()

  # Get the company's number of reviews.
  company_review_count = await page.query_selector('.review-count')
  company_review_count = await company_review_count.text()

  # Get the company's website URL.
  company_website_url = await page.query_selector('.website-url')
  company_website_url = await company_website_url.text()

  # Close the browser.
  await browser.close()

  # Return the company's details.
  return {
    'name': company_name,
    'rating': company_rating,
    'review_count': company_review_count,
    'website_url': company_website_url,
  }

def main():
  # Read the CSV file containing the G2Crowd URLs.
  with open('G2crowd_URLs.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
      G2crowd_URL = row[0]

      # Scrape the company's details from G2Crowd.
      company_details = scrape_company_details(G2crowd_URL)

      # Print the company's details.
      print(company_details)

if __name__ == '__main__':
  main()

