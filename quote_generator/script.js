const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader') 

//Get Quotes From API 
let apiQuotes = []

// show Loading
function loading(){
    loader.hidden = false
    quoteContainer.hidden = true
}

// Hide loading
function complete() {
    quoteContainer.hidden = false
    loader.hidden = true
}


const newQuote = function() {
    loading()
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if(!quote.author) {
        authorText.textContent = 'Unknown'
    }else {
        authorText.textContent = quote.author
    }

    if(quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    }else {
        quoteText.classList.remove('long-quote')
    }

    // Set Quote, Hide Loader
    complete()
     
    quoteText.textContent = quote.text

}
async function getQuotes() {
    loading()
    const apiURL  = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote(apiQuotes);
    } catch (error) {
        //Catch ERROR here
    }

}

const tweetQuote = function() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}

newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote)

getQuotes();