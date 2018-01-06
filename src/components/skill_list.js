import React from 'react';

import SuperbSkills from './skill_rank_components/superb_skills';

const SkillList = ({mySkills}) => {
  return (
    <div>
      <SuperbSkills superbSkills={mySkills.superb}/>
    </div>
  );
}

export default SkillList;
