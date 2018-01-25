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

    this.state = Character_0;
  }

  render() {
    return(
      <div>

        <div className="row">
          <CharacterInfo />
        </div>

        <div className="row">
          <AspectList myAspects={this.state.characterSheet.aspectList}/>
          <SkillList mySkills={this.state.characterSheet.skillList}/>
        </div>

        <div className="row">
          <StuntList myStunts={this.state.characterSheet.stuntList}/>
        </div>

        <div className="row">
          <StressList myStress={this.state.characterSheet.stressList}/>
          <ConsequenceList myConsequences={this.state.characterSheet.consequenceList}/>
        </div>

      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.target'));
