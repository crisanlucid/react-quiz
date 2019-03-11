import React from 'react';

const success = props => {
  return (
    <React.Fragment>
      <h1>Thank You For Your Submission</h1>
      <p>{props.message}</p>
    </React.Fragment>
  );
};

export default success;
