import React, { Component } from 'react';

import Name from './name';
import Description from './description';
import Refresh from './refresh';

export default class CharacterList extends Component {
  render() {
    return (
      <div>
        <Name />
        <Description />
        <Refresh />
      </div>
    );
  }
}
