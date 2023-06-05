let button = document.querySelector("#new-quote");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "The future starts today, not tomorrow.",
        author: "John Paul II"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marlyn Monroe"
    },
    {
        quote: "He who has a why to live for, can bear almost any how.",
        author: "Nietzsche"
    }
];

function generate_quote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex].quote;
    author.textContent = quotes[randomIndex].author;
}

 function init() {
     button.addEventListener("click", generate_quote);
 }

 init();