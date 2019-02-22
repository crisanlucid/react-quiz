import React from 'react';

const listItem = props => (
  <div>
    <h3>{props.primaryText}</h3>
    <p>{props.secondaryText}</p>
  </div>
);

export default listItem;
