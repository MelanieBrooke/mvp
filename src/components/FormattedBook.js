import React from 'react';


const FormattedBook = (props) => (
  <div>
    <li><p>Title: {props.book.title}</p><p>Author: {props.book.authorFirst} {props.book.authorLast}</p><p>Format: {props.book.format}</p></li>
  </div>
);

export default FormattedBook;