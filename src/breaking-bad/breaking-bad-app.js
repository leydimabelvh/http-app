import { fetchQuote } from "./fetch-api";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async(element) => {
    document.querySelector('#title-app').innerHTML = 'Breaking Bad App';   
    
    element.innerHTML = 'Loading...';
       
    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h4');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'NEXT QUOTE';
    
    const renderQuote = (quote) => {
        quoteLabel.innerHTML = quote.quote;
        authorLabel.innerHTML = quote.author;
        element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton );  
    }

    nextQuoteButton.addEventListener( 'click', async() => {

        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote( quote );
    } );

    fetchQuote()
                .then( quote => renderQuote(quote) )
}