import React from 'react';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title = '',
      authorFirst = '',
      authorLast = '',
      format = ''
    }
  }
}




// create class to make a form to submit book info to the server to add to the database


// add title, author first and last name, and format (choose from predetermined types for now, add option to extend later)
// for now require all fields