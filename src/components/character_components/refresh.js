import React, { Component } from 'react';

class Refresh extends Component {
  constructor(props){
    super(props);
    this.state = { refresh: 0 };
  }

  render() {
    return (
      <div className="col-sm-8">
        <label> Name
          <input
            className="col-6"
            value={this.state.refresh}
            onChange={event => this.onInputChange(event.target.value)}
            />
        </label>
      </div>
    );
  }

  onInputChange(refresh) {
    this.setState({refresh});
  }
}

export default Refresh;
