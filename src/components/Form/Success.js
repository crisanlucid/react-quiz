import React from 'react';

const success = props => {
  return (
    <React.Fragment>
      <h1>Thank You For Your Submission</h1>
      <h3>{props.message}</h3>
      {props.link ? (
        <div className="Form__wrapper--quiz">
          <p>tel: +4915171537273</p>
          <p>email: crisan.lucid@yahoo.com</p>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Set Up a Meeting
          </a>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default success;
