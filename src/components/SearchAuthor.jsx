import React from 'react';

class SearchAuthor extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchAuthor = this.searchAuthor.bind(this);


    this.state = {
      authorField: '',
    }
  }

  handleChange(event) {
    this.setState({
      authorField: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let author = this.state.authorField;
    this.searchAuthor(author);
  }
}

  searchAuthor(author) {
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