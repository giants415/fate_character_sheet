import React, { Component } from 'react';

class Name extends Component {
  constructor(props){
    super(props);
    this.state = { name: '' };
  }

  render() {
    return (
      <div className="col-8">
        <p>Name</p>
        <input
          className='name'
          placeholder='Choose your character&#39;s name'
          value={this.state.name}
          onChange={event => this.onInputChange(event.target.value)}
          />
      </div>
    );
  }

  onInputChange(name) {
    this.setState({name});
  }
}

export default Name;
