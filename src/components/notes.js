import React, { Component } from 'react';

class Notes extends Component {
  constructor(props){
    super(props);
    this.state = { extras: '' };
  }

  render() {
    return (
      <div className="col-lg-6">
        <h3>Notes</h3>
        <textarea
          type='text'
          className='text_box'
          placeholder='Keep track of items and anything else you want!'
          value={this.state.notes}
          onChange={event => this.onInputChange(event.target.value)}
          />
      </div>
    );
  }

  onInputChange(notes) {
    this.setState({notes});
  }
}

export default Notes;
