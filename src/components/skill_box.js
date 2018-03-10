import React, {Component} from 'react';

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
