import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import jQuery from 'jQuery';
import axios from 'axios';
import {sampleBooks} from './components/sampleData.js';
import DisplayBooks from './components/DisplayBooks.js';

const rootElement = document.getElementById('react-app');

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      books: sampleBooks,
    };
  }


//  componentDidMount() {
//     // const response = await fetch('http://localhost:9000');
//     // const data = await response.json();
//     // console.log(data);
//   //   // axios.get('http://localhost:9000/books')
//   //   // .then(function (response) {
//   //   //   console.log(response);
//   //   // };
//     this.getData();
//   }

  // renderBooks() {
  //   axios.get('http://localhost:9000/books')
  //   .then(result => console.log('result = ', result))
  // }

  // getData() {
  //   console.log('getData running')
  //   fetch('http://localhost:9000/', {
  //     method: 'GET'
  //   })
  //     .then(response => console.log(response))
  // }


  // getData() {
  //   console.log('fetch about to run?')

  //   axios.get('http://localhost:9000/books')
  //   .then(results => console.log(results))
  //   // .then(results => results.json)
  //   // .then(jsonresults => console.log(jsonresults))

  // };

  render() {
    return (
      <div>
      <div>
        <h1>BookWyrm Digital Bookshelf</h1>
      </div>
      <div id="booklist">
        <h4>Your Recent Books: </h4>
        <DisplayBooks books={this.state.books} />
      </div>
      <div>
        <button>Find Book by Title</button>
        <button>Find Books by Author</button>
      </div>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('react-app'));