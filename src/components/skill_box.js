import React, {Component} from 'react';

//need to use bootstrap to create a list that expands on click to show all available skills
//after selecting skill, box collapses and selected skill stays

class SkillBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: props.availableSkills
    };

    this.toggleExpand = this.toggleExpand.bind(this);

    console.log(this.state.skills);
  }

  renderList() {
    return this.state.skills.map((skill) => {
      return (
        <a className="dropdown-item" key={skill} href="#">
          {skill}
        </a>
      )
    });
  }

  toggleExpand() {

  }


  render(){
    return(
      <div className="dropdown">
        <button
        className="dropdownControl skill_box dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={this.toggleExpand}
        >
        Skills
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownControl">
          // {this.renderList()}
        </div>
      </div>
    );
  }
}

export default SkillBox;
