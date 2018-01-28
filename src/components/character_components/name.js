import React, { Component } from 'react';

class Name extends Component {
  constructor(props){
    super(props);
    this.state = { name: '' };
  }

  render() {
    return (
      <div className="col-sm-8">
        <label> Name
          <input
            value={this.state.name}
            onChange={event => this.onInputChange(event.target.value)}
            />
        </label>
      </div>
    );
  }

  onInputChange(name) {
    this.setState({name});
  }
}

export default Name;
