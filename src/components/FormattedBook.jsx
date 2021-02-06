import React from 'react';


const FormattedBook = (props) => (
  <div>
    <li>Title: {props.book.title}  Author: {props.book.firstName} {props.book.lastName}  Format: {props.book.format}</li>
  </div>
);

export default FormattedBook;