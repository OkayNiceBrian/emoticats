import React from 'react';
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
            />
        </form>
    </div>
}

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catImage: [
                null
                //'https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip'
            ],
        };
    }
  
    render() {
        return (
            <div className='image-container'>
                <img src={this.state.catImage[0]} alt="Cat" />
            </div>
        );
    }
}
  
class Emoticats extends React.Component {
    render() {
        return (
            <div className="container">
                <Search />
                <Image />
            </div>
        );
    }
}
  
  // ========================================

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render (
    <Emoticats />
);
  