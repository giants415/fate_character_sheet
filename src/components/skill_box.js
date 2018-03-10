import React, {Component} from 'react';

//need to use bootstrap to create a list that expands on click to show all available skills
//after selecting skill, box collapses and selected skill stays

class SkillBox extends Component {
  constructor(props) {
    super(props);

    this.state = props;

    console.log(this.state.availableSkills);
  }

  render(){
    return(
      <div className="skill_box">
        <span>test</span>
      </div>
    );
  }
}

export default SkillBox;
