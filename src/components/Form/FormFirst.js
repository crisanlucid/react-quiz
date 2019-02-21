import React from 'react';
import Button from '../UI/Button/Button';
import './Form.scss';

const formFirst = props => {
  const { values, handleChange } = props;

  console.log(handleChange, props);
  const continueHandler = e => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div className="form-group">
      <Button
        disabled={true}
        label="Back"
        btnType=""
        onClick={continueHandler}
      />
      <Button
        label="Next"
        btnType="Success"
        disabled={false}
        onClick={continueHandler}
      />
    </div>
  );
};

export default formFirst;
