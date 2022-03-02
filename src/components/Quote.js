import React, { useState} from 'react';
import quotes from "../quotes.json";

const colors = ["#C1F8CF", "#4FD3C4", "#488FB1", "#533E85" ];

const Quote = () => {

    const [ quote, setQuote ] = useState(quotes[getRandom()]);

    //const random = Math.floor(Math.random() * quotes.length)
    //const quote = quotes[12];

    const changeQuote = () => {
        setQuote(quotes[getRandom()])
    }

    const color = colors[Math.floor(Math.random() * colors.length)];

    document.body.style = `background: ${color}`

    return (
        <div className='card' style={{color: color}}>
            <i className="fas fa-quote-left" id='quote-left'></i>
            <h3 className='quote'>{quote.quote}</h3><h3 className='author'>{quote.author}</h3>
            <button onClick={changeQuote} style={{color: color}}> <i className="fas fa-chevron-right" ></i> </button>              
        </div>
    );
};

const getRandom = () => Math.floor(Math.random() * quotes.length)

export default Quote;