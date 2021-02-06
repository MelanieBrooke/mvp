import React from 'react';
import FormattedBook from './FormattedBook.js';

class SearchBooks extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchBook = this.searchBook.bind(this);


    this.state = {
      bookField: '',
    }
  }

  handleChange(event) {
    this.setState({
      bookField: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let book = this.state.bookField;
    this.searchBook(book);
  }
};

  searchBook(book) {
    // write fetch thing here
    var div = document.getElementById('booklist');
    for (var title in this.books) {
      if (title.title = book) {
        div.innerHTML=<FormattedBook book={title} />
      }
    }
  };

  render() {
    <div>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" />
        <input type="submit" />
      </form>
    </div>
  };
}

exports.default(SearchBooks);