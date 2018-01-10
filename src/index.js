import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CharacterInfo from './components/character_info';
import AspectList from './components/aspect_list';
import SkillList from './components/skill_list';
import StuntList from './components/stunt_list';


const characterList = [
  {
    player: 'me',
    characterSheet: {
      name: 'garfinkle',
      description: 'a cool guy with a disposition',
      refresh: 3,
      aspectList: ['aspect 1', 'aspect 2','aspect 3','aspect 4','aspect 5'],
      skillList: {
        superb: ['superb 1', 'superb 2', 'superb 3', 'superb 4', 'superb 5'],
        great: ['great 1', 'great 2', 'great 3', 'great 4', 'great 5'],
        good: ['good 1', 'good 2', 'good 3', 'good 4', 'good 5'],
        fair: ['fair 1', 'fair 2', 'fair 3', 'fair 4', 'fair 5'],
        average: ['average 1', 'average 2', 'average 3', 'average 4', 'average 5'],
      },
      stuntList: [
        'fast reload - when behind cover, you can reload and shoot using only 1 action',
        'dangerous roads ahead - when driving or riding in a vehicle on dangerous terrian, add +1 to rolls'
      ],
      consequenceList: {
        mild: '',
        moderate: '',
        severe: ''
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
        <AspectList myAspects={this.state.characterSheet.aspectList}/>
        <SkillList mySkills={this.state.characterSheet.skillList}/>
        <StuntList myStunts={this.state.characterSheet.stuntList}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
