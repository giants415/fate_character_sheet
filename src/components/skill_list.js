import React, {Component} from 'react';

import SuperbSkills from './skill_rank_components/superb_skills';
import GreatSkills from './skill_rank_components/great_skills';
import GoodSkills from './skill_rank_components/good_skills';
import FairSkills from './skill_rank_components/fair_skills';
import AverageSkills from './skill_rank_components/average_skills';


class SkillList extends Component {
  constructor(mySkills){
    super(mySkills);
    
    this.state = mySkills;
  }  
  
  render(){
    return (
      <div className="col-lg-6 skill_list">
        <h3>Skills</h3>
        <SuperbSkills/>
        <GreatSkills/>
        <GoodSkills/>
        <FairSkills/>
        <AverageSkills/>
      </div>
    );
  }
}

export default SkillList;
