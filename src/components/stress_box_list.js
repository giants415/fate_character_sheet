import React from 'react';
import StressBox from './stress_components/stress_box';

const StressBoxList = () => {
  return(
    <div>
      <StressBox key={1}/>
      <StressBox key={2}/>
    </div>
  )
};


export default StressBoxList;
