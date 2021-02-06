import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import jQuery from 'jQuery';
import axios from 'axios';

const rootElement = document.getElementById('react-app');

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  // seeBooks() {


  //   // request here
  // },

  componentDidMount() {
  //   // axios.get('http://localhost:9000/books')
  //   // .then(function (response) {
  //   //   console.log(response);
  //   // };
    this.getData();
  }

  // renderBooks() {
  //   axios.get('http://localhost:9000/books')
  //   .then(result => console.log('result = ', result))
  // }

  getData() {
    console.log('getData running')
    fetch('http://localhost:9000/', {
      method: 'GET'
    })
      .then(response => console.log(response))
  }


  // getData() {
  //   console.log('fetch about to run?')

  //   axios.get('http://localhost:9000/books')
  //   .then(results => console.log(results))
  //   // .then(results => results.json)
  //   // .then(jsonresults => console.log(jsonresults))

  // };

  render() {
    return (
      <div>
      <div>
        <h1>BookWyrm Digital Bookshelf</h1>
      </div>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('react-app'));