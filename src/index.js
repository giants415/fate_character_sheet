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

import './style.scss';


class App extends Component {
  constructor(props){
    super(props);

    this.state = Character_0;
  }

  render() {
    return(
      <div>
        <CharacterList />

        <div className="row aspects_skills">
          <AspectList myAspects={this.state.characterSheet.aspectList}/>
          <SkillList skills={this.state.characterSheet.skillList}/>
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
