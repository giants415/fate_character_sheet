import React, { Component } from 'react';

import Character_0 from '../Character_0';

class CharacterInfo extends Component {
  constructor(props){
    super(props);

    this.state = { name: '' };

  render() {
    return (
      <div className="col-sm-8">
        <label> Name
          <input
            className="col-6"
            value={this.state.name}
            onChange={event => this.onInputChange(event.target.value)}
            />
        </label>
      </div>
    );
  }

  onInputChange(namw) {
    this.setState({name});
  }
};

export default CharacterInfo;
