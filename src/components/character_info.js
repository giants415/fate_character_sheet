import React, { Component } from 'react';

import Name from './name';

class CharacterInfo extends Component {
  render() {
    return(
      <div>
        <Name />
        <h1>Description</h1>
        <h1>Refresh</h1>
      </div>
    )
  }
}

export default CharacterInfo;
