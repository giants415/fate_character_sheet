import React, { Component } from 'react';

import TextLock from './text_lock';
import Character_0 from '../Character_0';

class CharacterInfo extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <div className="col-sm-8">
          <label> Name
            <input
              className="col-6"
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
              />
            <TextLock />
          </label>
          <h4 className="col-6">Description: {Character_0.characterSheet.description}</h4>
        </div>
        <div className="col-lg-4">
          <h4>Refresh: {Character_0.characterSheet.refresh}</h4>
        </div>
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
  }
};

export default CharacterInfo;
