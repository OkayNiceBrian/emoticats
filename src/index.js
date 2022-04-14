import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Emoticats = () => {
    const [catImage, setCatImage] = useState('');

    const Search = () => {
        const [searchInput, setSearchInput] = useState('');
    
        function handleSubmit(event) {
            console.log("Search submitted.");
            console.log("Value: " + searchInput);
            event.preventDefault();
        }
    
        function handleChange(event) {
            setSearchInput(event.target.value);
        }
    
        return <div className='search-container'>
            <form 
                action="/" 
                method="get"
                onSubmit={handleSubmit}
            >
                <div className='text-and-search'>
                    <label htmlFor="header-search" style={{marginBottom: 20}}>
                        <span className="visually-hidden">How are you feeling today?</span>
                    </label>
                    <div className='bar-and-button'>
                        <input
                            type="text"
                            id="header-search"
                            placeholder="Mood"
                            name="s"
                            style={{marginRight: 10}}
                            value={searchInput}
                            onChange={handleChange}
                        />
                        <input 
                            type="submit" value="Submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    }
    
    const Image = (props) => {
        return (
            catImage &&
            <div className='image-container'>
                <img src={catImage} alt="Cat" />
            </div>
        );
    }

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
  