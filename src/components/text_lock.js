// resources for building
//
// https://stackoverflow.com/questions/36773671/deactivate-input-in-react-with-a-button-click
//
// https://stackoverflow.com/questions/13701923/disable-editing-default-value-of-text-input
//
// https://stackoverflow.com/questions/9649877/how-to-disable-enable-input-field-on-click-with-jquery
// probably the best source for a simple button

import React, { Component } from 'react';

const lockStyle = {
  width: '24px',
  height: '24px',
  border: '1px black solid',
  display: 'inline-block'
}

class TextLock extends Component {
  constructor(props) {
    super(props);

    this.state = { lock: false }
  }

  render() {
    return(
      <div style={lockStyle}>
      </div>
    )
  }

  toggleLock() {
    if (this.state === false) {

    }
  }
};

export default TextLock;
