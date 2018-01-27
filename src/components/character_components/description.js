import React, { Component } from 'react';

class Description extends Component {
  constructor(props){
    super(props);
    this.state = { description: '' };
  }

  render() {
    return (
      <div className="col-sm-8">
        <label> Name
          <input
            className="col-6"
            value={this.state.description}
            onChange={event => this.onInputChange(event.target.value)}
            />
        </label>
      </div>
    );
  }

  onInputChange(description) {
    this.setState({description});
  }
}

export default Description;
