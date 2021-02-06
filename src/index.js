import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import jQuery from 'jQuery';
import axios from 'axios';
import {sampleBooks} from './components/sampleData.js';
import DisplayBooks from './components/DisplayBooks.js';
import AddBooks from './components/AddBooks.js';
// import SearchBooks from './components/SearchBooks.js';

const rootElement = document.getElementById('react-app');

class App extends React.Component{
  constructor(props) {
    super(props);
    this.addNewBook = this.addNewBook.bind(this);
    this.state = {
      books: sampleBooks,
    };
  }

  // load book state from database (get request to server)
  // when new book is added, post to database (post request to server)


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

  addNewBook(bookObj) {
    this.state.books.unshift(bookObj);
    this.setState({
      books: this.state.books
    });
  }

  render() {
    return (
      <div>
      <div>
        <h1>BookWyrm Digital Bookshelf</h1>
        {/* <h3>Coming soon:</h3>
        <p>Search your library by title or author</p>
        <p>Organize your books into series</p>
        <p>Easily see books duplicated between digital and physical</p>
        <p>Keep track of the versions of books</p>
        <p>Never buy a book for the third time at a garage sale 'just in case you don't have that one' ever again</p> */}
      </div>
      <div id="booklist">
        <h4>Your Recent Books: </h4>
        <DisplayBooks books={this.state.books} />
      </div>
      <div>
        <div id="bookSearch">
          {/* Find Books By Title */}
          {/* <SearchBooks books={this.state.books}/> */}
        </div>
        {/* <button>Find Books by Author</button> */}
      </div>
      <div>
        <h4>Add books to your library:</h4>
        <AddBooks books={this.state.books} addNewBook={this.addNewBook}/>
      </div>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('react-app'));