import React, { Component } from 'react';

import Name from './character_components/name';
import Description from './character_components/description';
import Refresh from './character_components/refresh';

export default class CharacterList extends Component {
  render() {
    return (
      <div className="row">
        <div className='col-lg-9'>
          <Name />
          <Description />
        </div>
        <div className='col-lg-3'>
          <Refresh />
        </div>
      </div>
    );
  }
}
