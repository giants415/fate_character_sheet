import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CharacterInfo from './components/character_info';

const characterList = [
  {
    player: 'me',
    characterSheet: {
      name: 'garfinkle',
      description: 'a cool guy with a disposition',
      refresh: 3
    }
  }
]

class App extends Component {
  constructor(props){
    super(props);

    this.state = characterList[0];
  }

  render() {
    return(
      <div>
        <CharacterInfo myChar={this.state.characterSheet}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
