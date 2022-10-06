"strict";

//  Get quotes from API

// will use an asycronous fetch request within a tri catch statement. Menas it will run continously and it wont stop the browser from loading a page.

let apiQuotes = [];

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl); // here the const response will not be populated untill it has data fetched from the api.
    apiQuotes = await response.json(); // here we string fetch into the const. then conver const response into json, and pass it to the apiQuotes constant.
    console.log(apiQuotes);
  } catch (error) {
    // catch error here
  }
}

// On load

getQuotes();
