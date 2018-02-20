import React, {Component} from 'react';

class StressBox extends Component {
  construtor(props) {
    this.state = { active: false };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({ active: !this.state.active });
  }

  render(){
    return (
      <div>
        <div onClick={this.onClick}>
        </div>

        <div onClick={this.onClick}>
        </div>
      </div>
    );
  }

}

export default StressBox;
