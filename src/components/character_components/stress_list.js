import React, {Component} from 'react';
import StressBox from './stress_components/stress_box';

class StressList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <StressBox />
        <StressBox />
      <div>
    )
  }
}


export default StressList;
