import React from 'react';

class SearchBooks extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchAuthor = this.searchBooks.bind(this);


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
}

  searchBook(book) {
    // write fetch thing here
  }

  render() {
    <div>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" />
        <input type="submit" />
      </form>
    </div>
  }
}