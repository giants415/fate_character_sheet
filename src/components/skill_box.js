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


//FUTURE STEP: instead of "RESET SKILL", skills that are spliced out should appear red/striked through
//then, when users want to reset skill this styling can be undone and the previously unavailable skill can be chosen again
  selectSkill(e) {
    const skillArr = this.state.skills;
    let selectedSkill = e.target.textContent;
    let currentDisplay = this.state.displayedText;

    if (currentDisplay == 'Skills') {
      //removes selected skill from array and sets State
      skillArr.splice(skillArr.indexOf(selectedSkill), 1);

      //checks for presence of reset skill to avoid duplication
      if (skillArr.indexOf('CLEAR SKILL') === -1){
        skillArr.unshift('CLEAR SKILL');
      }

      this.setState({
        displayedText: selectedSkill,
        skills: skillArr
      });
    } else if (selectedSkill == 'CLEAR SKILL') {
      skillArr.push(currentDisplay);
      skillArr.splice(skillArr.indexOf(selectedSkill), 1);
      this.setState({
        displayedText: 'Skills',
        skills: skillArr
      });
    } else {
      let prevSkill = currentDisplay;
      let newSkill = selectedSkill;
      skillArr.push(prevSkill);
      this.setState({
        displayedText: newSkill,
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
