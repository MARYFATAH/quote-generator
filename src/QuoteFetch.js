import React, { useState } from 'react'
import axios from 'axios';
import './App.css';

export default function QuoteFetch() {

    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://api.quotable.io/random');
            setContent(response.data.content);
            setAuthor(response.data.author);
            
        } catch(error) {
            console.error('Error fetching the quote', error);
        }
        
    };
  return (
    <div className='Card'> 
          <p>"{content}"</p>
          <p>{author}</p>
          <button  className='Button' onClick={fetchQuote}>new Quote</button>
    </div>
  )
}
