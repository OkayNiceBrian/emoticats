import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catImage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&psig=AOvVaw2168yU6nHD-NKOWfArN0Fe&ust=1649807116855000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKjln8uYjfcCFQAAAAAdAAAAABAD',
        };
    }
  
    render() {
        return (
            <div className='image-container'>
                <img src={this.state.catImage} alt="Cat" />
            </div>
        );
    }
}
  
class Emoticats extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="search">
                    {{ /* TODO */ }}
                </div>
                <div className="image">
                    <Image />
                </div>
            </div>
        );
    }
}
  
  // ========================================
  
ReactDOM.render(
    <Emoticats />,
    document.getElementById('root')
);
  