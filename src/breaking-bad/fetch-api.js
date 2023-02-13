/**
 * @returns {Promise<Object>} Quote information
 */
const fetchQuote = async() => {
    const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await response.json();

    return data[0];
}