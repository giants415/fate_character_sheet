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
      },
      skillList: {
        superb: {1: 'superb 1', 2: 'superb 2', 3: 'superb 3', 4: 'superb 4', 5: 'superb 5'},
        great: {1: 'great 1', 2: 'great 2', 3: 'great 3', 4: 'great 4', 5: 'great 5'},
        good: {1: 'good 1', 2: 'good 2', 3: 'good 3', 4: 'good 4', 5: 'good 5'},
        fair: {1: 'fair 1', 2: 'fair 2', 3: 'fair 3', 4: 'fair 4', 5: 'fair 5'},
        average: {1: 'average 1', 2: 'average 2', 3: 'average 3', 4: 'average 4', 5: 'average 5'},
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
