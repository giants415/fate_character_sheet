import React, { Component } from 'react';

const refreshStyle = {
  height: '136px',
  width: '136px',
  textAlign: 'center',
  fontSize: '90px'
}

const pStyle ={
  margin: '0px',
  width: '136px',
  textAlign: 'center'
}

class Refresh extends Component {
  constructor(props){
    super(props);
    this.state = { refresh: 3 };
  }

  render() {
    return (
      <div>
        <p style={pStyle}>Refresh</p>
        <input
          style={refreshStyle}
          value={this.state.refresh}
          onChange={event => this.onInputChange(event.target.value)}
          />
      </div>
    );
  }

  onInputChange(refresh) {
    this.setState({refresh});
  }
}

export default Refresh;
