import React, {Component} from 'react';

//need to use bootstrap to create a list that expands on click to show all available skills
//after selecting skill, box collapses and selected skill stays

class SkillBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: props.availableSkills,
      displayedText: 'Skills',
      dropdownDiv: 'dropdown',
      btnAriaExpanded: 'false',
      dropdownMenu: 'dropdown-menu'
    };

    this.toggleShowList = this.toggleShowList.bind(this);

    this.selectSkill = this.selectSkill.bind(this);
  }

  renderList() {
    return this.state.skills.map((skill) => {
      return (
        <span className="dropdown-item" key={skill} onClick={this.selectSkill}>
          {skill}
        </span>
      )
    });
  }

  toggleShowList() {
    this.setState({
      dropdownDiv: 'dropdown show',
      btnAriaExpanded: 'true',
      dropdownMenu: 'dropdown-menu show'
    });
  }

  selectSkill(e) {
    const skillArr = this.state.skills;
    let selectedSkill = e.target.textContent;

    if (this.state.displayedText == 'Skills') {
      //removes selected skill from array and sets State
      skillArr.splice(selectedSkill, 1);

      this.setState({
        displayedText: selectedSkill,
        skills: skillArr
      });
    } else {
      // by clicking on any other element in the skill list dropdown, the box is reset to say Skills
      // and the previously selected skill is placed at the bottom of the skill array
      skillArr.push(this.state.displayedText);
      this.setState({
        displayedText: 'Skills',
        skills: skillArr
      });
    }
  }


  render(){
    return(
      <div className={this.state.dropdownDiv}>
        <button
        className="dropdownControl skill_box dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={this.state.btnAriaExpanded}
        onClick={this.toggleShowList}
        >
        {this.state.displayedText}
        </button>
        <div className={this.state.dropdownMenu} aria-labelledby="dropdownControl" x-placement="bottom-start">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default SkillBox;
