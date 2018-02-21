import React, {Component} from 'react';

class StressBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      display: ''
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({ display: 'X' });
    console.log(this.state);
  }

  render(){
    return (
      <div>
        <div key={1} onClick={this.onClick}>
          {this.state.display}
        </div>

        <div key={2} onClick={this.onClick}>
          {this.state.display}
        </div>
      </div>
    );
  }

}

export default StressBox;
