import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './App.css';

export default function QuoteFetch() {

    const [content, setContent] = useState('Click to see a quote');
    const [author, setAuthor] = useState();

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
    <Card className='m-5 p-1 bg-dark '>
      <Card.Body className=''> 
          <Card.Text className='text-light'>"{content}"</Card.Text>
          <Card.Text  className='text-light'>{author}</Card.Text>
          <Button  className='bg-danger border-0' onClick={fetchQuote}>New Quote</Button>
      </Card.Body>
    </Card>
  )
}
