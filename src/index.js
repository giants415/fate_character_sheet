import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Character_0 from './Character_0';
import CharacterList from './components/character_list';
import AspectList from './components/aspect_list';
import SkillList from './components/skill_list';
import StuntList from './components/stunt_list';
import Notes from './components/notes';
import StressList from './components/stress_list';
import ConsequenceList from './components/consequence_list';

const sheetStyle = {
  border: '2px solid black',
  padding: '20px'
}

const aspectSkillStyle = {
  marginTop: '20px'
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = Character_0;
  }

  render() {
    return(
      <div style={sheetStyle}>
        <CharacterList />

        <div className="row" style={aspectSkillStyle}>
          <AspectList myAspects={this.state.characterSheet.aspectList}/>
          <SkillList mySkills={this.state.characterSheet.skillList}/>
        </div>

        <div className="row">
          <StuntList myStunts={this.state.characterSheet.stuntList}/>
          <Notes />
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
