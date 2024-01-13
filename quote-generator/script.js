const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// SHOW NEW QUOTE
function newQuote() {

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // If Author field is null
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    // check Quote length
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;

}

// GET QUOTES FROM API
async function getQuote() {

    const apiUrl = 'https://type.fit/api/quotes';
    
    try {
        
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    } catch (error) {
        // Catch Error
    }

}

// On Load
getQuote();