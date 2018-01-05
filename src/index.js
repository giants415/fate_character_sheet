import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CharacterInfo from './components/character_info';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: 'garfinkle',
      description: 'a cool guy with a disposition',
      refresh: 3
    };
  }

  render() {
    return(
      <div>
        <CharacterInfo myChar={this.state}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
