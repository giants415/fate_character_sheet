import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Character_0 from './Character_0';
import CharacterInfo from './components/character_info';
import AspectList from './components/aspect_list';
import SkillList from './components/skill_list';
import StuntList from './components/stunt_list';
import StressList from './components/stress_list';
import ConsequenceList from './components/consequence_list';

class App extends Component {
  constructor(props){
    super(props);

    console.log({Character_0});

    this.state = Character_0;
  }

  render() {
    return(
      <div>
        <CharacterInfo myChar={this.state.characterSheet}/>
        <AspectList myAspects={this.state.characterSheet.aspectList}/>
        <SkillList mySkills={this.state.characterSheet.skillList}/>
        <StuntList myStunts={this.state.characterSheet.stuntList}/>
        <StressList myStress={this.state.characterSheet.stressList}/>
        <ConsequenceList myConsequences={this.state.characterSheet.consequenceList}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
