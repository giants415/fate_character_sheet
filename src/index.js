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
        superb: ['superb 1', 'superb 2', 'superb 3', 'superb 4', 'superb 5'],
        great: ['great 1', 'great 2', 'great 3', 'great 4', 'great 5'],
        good: ['good 1', 'good 2', 'good 3', 'good 4', 'good 5'],
        fair: ['fair 1', 'fair 2', 'fair 3', 'fair 4', 'fair 5'],
        average: ['average 1', 'average 2', 'average 3', 'average 4', 'average 5'],
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
        <SkillList mySkills={this.state.characterSheet.skillList}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
