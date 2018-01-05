import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CharacterInfo from './components/character_info';
import AspectList from './components/aspect_list';
import SkillList from './components/skill_list';

const characterList = [
  {
    player: 'me',
    characterSheet: {
      name: 'garfinkle',
      description: 'a cool guy with a disposition',
      refresh: 3,
      aspectList: {
        1: 'aspect 1',
        2: 'aspect 2',
        3: 'aspect 3',
        4: 'aspect 4',
        5: 'aspect 5',
      }
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
        <AspectList myAspect={this.state.characterSheet.aspectList}/>
        <SkillList />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
