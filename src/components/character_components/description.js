import React, { Component } from 'react';

class Description extends Component {
  constructor(props){
    super(props);
    this.state = { description: '' };
  }

  render() {
    return (
      <div className="col-8">
        <p>Description</p>
        <textarea
          type='text'
          className='text_box'
          placeholder='Describe your chracter'
          value={this.state.description}
          onChange={event => this.onInputChange(event.target.value)}
          />
      </div>
    );
  }

  onInputChange(description) {
    this.setState({description});
  }
}

export default Description;
