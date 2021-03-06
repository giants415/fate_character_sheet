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
    if (this.state.active == false) {
      this.setState({ active: true, display: 'X' });
    } else {
      this.setState({ active: false, display: ''});
    }
    console.log(this.state);
  }

  render(){
    return (
      <div onClick={this.onClick}>
        {this.state.display}
      </div>
    );
  }

}

export default StressBox;
