import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CharacterInfo from './components/character_info';

class App extends Component {

  render() {
    return(
      <div>
        <CharacterInfo />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
