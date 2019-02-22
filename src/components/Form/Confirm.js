import React from 'react';
import Button from '../UI/Button/Button';
import ListItem from '../UI/List/ListItem';

import './Form.scss';

const formConfirm = props => {
  const { values, handleChange } = props;

  const fieldsForm = values.reduce((acc, { values }) => {
    return Object.assign(acc, values);
  }, {});

  const continueHandler = e => {
    e.preventDefault();
    props.nextStep();
  };

  const backHandler = e => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <React.Fragment>
      <h1>Form Preview Quiz</h1>
      <div className="Form__wrapper--quiz text left">
        {Object.values(fieldsForm).map((config, index) => (
          <div key={index} className="form-quiz">
            <ListItem primaryText={config.label} secondaryText={config.value} />
          </div>
        ))}
      </div>
      <div className="form-group">
        <Button
          disabled={false}
          label="Back"
          btnType=""
          onClick={backHandler}
        />
        <Button
          label="Finish"
          btnType="Success"
          disabled={false}
          onClick={continueHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default formConfirm;
