import React from 'react';
import Button from '../UI/Button/Button';
import ListItem from '../UI/List/ListItem';

import './Form.scss';

const formConfirm = props => {
  const { values } = props;

  const listFieldsRawForm = values.reduce((acc, { values }) => {
    acc.push(Object.values(values));
    return acc;
  }, []);

  const fieldsForm = listFieldsRawForm.reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
  }, []);

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
        {fieldsForm.map((config, index) => (
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
