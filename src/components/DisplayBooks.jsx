import React from 'react';
import FormattedBook from './FormattedBook.jsx';

const DisplayBooks = (props) => (
  <div id="searchResults">
    <ul>
      {props.bookResults.map(book =>
        <FormattedBook book={book}/>)}
    </ul>
  </div>
)

export default DisplayBooks;