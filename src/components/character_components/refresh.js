import React, { Component } from 'react';

class Refresh extends Component {
  constructor(props){
    super(props);
    this.state = { refresh: 3 };
  }

  render() {
    return (
      <div className="col-sm-8">
        <input
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
