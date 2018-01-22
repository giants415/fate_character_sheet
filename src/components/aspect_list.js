import React from 'react';

const tableStyle = {
  maxWidth: '50%',
  border: '1px black solid'
};

const AspectList = ({myAspects}) => {
  return (
    <table style={tableStyle} className="col-lg-6 table">
      <thead><tr><th>Aspects</th></tr></thead>
      <tbody>
        <tr><td>{myAspects[0]}</td></tr>
        <tr><td>{myAspects[1]}</td></tr>
        <tr><td>{myAspects[2]}</td></tr>
        <tr><td>{myAspects[3]}</td></tr>
        <tr><td>{myAspects[4]}</td></tr>
      </tbody>
    </table>
  )
};

export default AspectList;
