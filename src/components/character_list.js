import React, { Component } from 'react';

import Name from './character_components/name';
import Description from './character_components/description';
import Refresh from './character_components/refresh';

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
