import React from 'react';

import SuperbSkills from './skill_rank_components/superb_skills';
import GreatSkills from './skill_rank_components/great_skills';
import GoodSkills from './skill_rank_components/good_skills';



const SkillList = ({mySkills}) => {
  return (
    <div>
      <SuperbSkills superbSkills={mySkills.superb}/>
      <GreatSkills greatSkills={mySkills.great}/>
      <GoodSkills goodSkills={mySkills.good}/>
    </div>
  );
}

export default SkillList;
