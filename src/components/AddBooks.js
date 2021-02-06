import React from 'react';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createBook = this.createBook.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: '',
      authorFirst: '',
      authorLast: '',
      format: ''
    }
  }

  createBook(title, first, last, format) {
    var bookObject = {
      title: title,
      authorFirst: first,
      authorLast: last,
      format: format
    }
    return bookObject;
  }

  handleSubmit(e) {
    e.preventDefault();
    var newBook = this.createBook(this.state.title, this.state.authorFirst, this.state.authorLast, this.state.format);
    this.props.addNewBook(newBook);
    console.log('book added!')
    document.getElementById('inputForm').reset();
    this.setState({
      title: '',
      authorFirst: '',
      authorLast: '',
      format: ''
    });
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id='inputForm'>
          <label>
            Book Title:
            <input
            onChange={this.handleChange}
            type='text'
            name='title' />
          </label>
          <br/>
          <label>
            Author's First Name:
            <input
            onChange={this.handleChange}
            type='text'
            name='authorFirst' />
          </label>
          <br/>
          <label>
            Author's Last Name:
            <input
            onChange={this.handleChange}
            type='text'
            name='authorLast' />
          </label>
          <br/>
          <label>
            Book Format (Hardcover, Kindle, etc):
            <input
            onChange={this.handleChange}
            type='text'
            name='format' />
          </label>
          <br/>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }


}

export default AddBook;



// create class to make a form to submit book info to the server to add to the database


// add title, author first and last name, and format (choose from predetermined types for now, add option to extend later)
// for now require all fields