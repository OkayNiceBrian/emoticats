import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Search = () => {
    return <div className='search-container'>
        <form action="/" method="get">
            <label htmlFor="header-search" style={{marginRight: 10}}>
                <span className="visually-hidden">How are you feeling today?</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Mood"
                name="s"
                style={{marginRight: 10}}
            />
            <button>Go!</button>
        </form>
    </div>
}

const Image = (props) => {
    const [catImage, setCatImage] = useState('https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip');

    return (
        catImage &&
        <div className='image-container'>
            <img src={catImage} alt="Cat" />
        </div>
    );
}
  
const Emoticats = () => {
    return (
        <div className="container">
            <Search />
            <Image />
        </div>
    );
}
  
  // ========================================

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render (
    <Emoticats />
);
  