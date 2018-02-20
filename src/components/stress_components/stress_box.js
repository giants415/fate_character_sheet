import React, {Component} from 'react';

class StressBox extends Component {
  construtor() {
    this.state = { active: false };
  }

  onClick(event) {
    this.setState(prevState => ({
      check: !prevState.check
    }));
  }

  render(){
    return (
      <div>
        <div>
        </div>

        <div>
        </div>
      </div>
    );
  }

}

export default StressBox;
