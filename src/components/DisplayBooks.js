import React from 'react';
import FormattedBook from './FormattedBook.js';

const DisplayBooks = (props) => (
  <div id="searchResults">
    <ul>
      {props.books.map(book =>
        <FormattedBook book={book}/>)}
    </ul>
  </div>
)

export default DisplayBooks;