import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('react-app');

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div>
        BookWyrm Digital Bookshelf
      </div>
      <div>
        <button onclick="this.seeBooks()">Show Your Books</button>
      </div>
    </div>
    )
  };
}

seeBooks() {
  console.log('books!')

  // request here
}

ReactDOM.render(<App />, document.getElementById('react-app'));