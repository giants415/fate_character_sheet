import React from 'react';

import SuperbSkills from './skill_rank_components/superb_skills';
import GreatSkills from './skill_rank_components/great_skills';
import GoodSkills from './skill_rank_components/good_skills';
import FairSkills from './skill_rank_components/fair_skills';
import AverageSkills from './skill_rank_components/average_skills';


const SkillList = ({mySkills}) => {
  return (
    <div className="col-lg-6">
      <p>Skills</p>
      <SuperbSkills superbSkills={mySkills.superb}/>
      <GreatSkills greatSkills={mySkills.great}/>
      <GoodSkills goodSkills={mySkills.good}/>
      <FairSkills fairSkills={mySkills.fair}/>
      <AverageSkills AverageSkills={mySkills.average}/>
    </div>
  );
}

export default SkillList;
