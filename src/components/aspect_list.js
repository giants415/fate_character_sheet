import React, { Component } from 'react';

class AspectList extends Component {
  renderAspects({myAspects}){
    console.log(myAspects);
  };

  render() {
    return (
      <table className="col-lg-6">
        <thead><tr><th>Aspects</th></tr></thead>
        <tbody>

        </tbody>
      </table>
    )
  }
}


export default AspectList;
