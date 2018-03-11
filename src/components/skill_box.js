import React, {Component} from 'react';

//need to use bootstrap to create a list that expands on click to show all available skills
//after selecting skill, box collapses and selected skill stays

class SkillBox extends Component {
  constructor(props) {
    super(props);

    this.state = props;

    console.log(props.availableSkills);
  }

  renderList() {
    return this.props.availableSkills.map((skill) => {
      return (
        <li key={skill}>
          {skill}
        </li>
      )
    });
  }

  render(){
    return(
      <div className="skill_box dropdown">
        <button
        className="dropdownControl btn btn-secondary dropdown-toggle"
        type="button"
        dataToggle="dropdown"
        ariaHaspopup="true"
        ariaExpanded="false"
        >
        Skills
        </button>
        {this.renderList()}
      </div>
    );
  }
}

export default SkillBox;
