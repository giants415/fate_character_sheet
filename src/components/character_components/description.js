import React, { Component } from 'react';

const textArea = {
  width: '300px',
  height: '100px'
}

class Description extends Component {
  constructor(props){
    super(props);
    this.state = { description: '' };
  }

  render() {
    return (
      <div className="col-sm-8">
        <textarea
          type='text'
          style={textArea}
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
