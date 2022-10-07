"strict";

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const quoteBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

//  Get quotes from API

// will use an asycronous fetch request within a tri catch statement. Menas it will run continously and it wont stop the browser from loading a page.

let apiQuotes = [];

// show new quote.
function newQuote() {
  // Pick a randon quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //   //    Only use this if you use the loacl quotes array. This is for when the author field says 'null' and we replace it with 'inknown' in the author field.//

  //   if (!quote.author) {
  //     authorText.textContent = "Unknown";
  //   } else {
  //     author.Text.textContent = quote.text;
  //   }

  // Check the quote length to detemine the styling.
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
}
//  Get quotes from API.
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl); // here the const response will not be populated untill it has data fetched from the api.
    apiQuotes = await response.json(); // here we string fetch into the const. then conver const response into json, and pass it to the apiQuotes constant.
    newQuote();
  } catch (error) {
    // catch error here
  }
}

// Tweet a quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank"); // thsi will open twitter on a new page...
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
// twitterBtn.addEventListener("click", tweetQuote);

// // On load

getQuotes();
