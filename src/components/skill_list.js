import React, {Component} from 'react';

import SkillBox from './skill_box';

//may be necessary to remove individual skill rank components and instead
//create a single skill box, similar to the stress box, that will display a chosen skill
//all formatting for skill "Values" can be done as visual descriptors since app won't keep
//track of value of skills when in use, just if they have been used or not

class SkillList extends Component {
  constructor(skills){
    super(skills);

    this.state = skills;
  }

  render(){
    return (
      <div className="col-lg-6 skill_list">
        <h3>Skills</h3>
        <div className="col-lg-6">
          <p>+5</p>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
        </div>
        <div className="col-lg-6">
          <p>+4</p>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
        </div>
        <div className="col-lg-6">
          <p>+3</p>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
        </div>
        <div className="col-lg-6">
          <p>+2</p>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
        </div>
        <div className="col-lg-6">
          <p>+1</p>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
          <SkillBox availableSkills={this.state.skills}/>
        </div>
      </div>
    );
  }
}

export default SkillList;
