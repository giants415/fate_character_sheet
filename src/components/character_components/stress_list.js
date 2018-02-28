import React, {Component} from 'react';
import StressBox from './stress_components/stress_box';

class StressList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <StressBox key={1} />
        <StressBox key={2} />
      <div>
    )
  }
}


export default StressList;
