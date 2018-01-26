import React, { Component } from 'react';

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
          </label>
          <input
            className="col-6"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
            />        </div>
        <div className="col-lg-4">
          <input
            className="col-6"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
            />
        </div>
      </div>
    )
  }

  onInputChange(term) {
    console.log(term);
    this.setState({term});
  }
};

export default CharacterInfo;
