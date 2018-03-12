import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//need to use bootstrap to create a list that expands on click to show all available skills
//after selecting skill, box collapses and selected skill stays

class SkillBox extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      skills: props.availableSkills,
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
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



  render(){
    return(
      <div className="dropdown">
        <button
        className="dropdownControl skill_box dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
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
