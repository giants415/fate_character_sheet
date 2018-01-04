import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  render() {
    return(
      <div>
        <h1>Test works!</h1>
        <h2>Vinocur</h2>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
