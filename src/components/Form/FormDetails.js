import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './Form.scss';

const formDetails = props => {
  const { values, handleChange } = props;

  const fieldsForm = values;
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
      <div className="Form__wrapper--quiz">
        {Object.values(fieldsForm).map((config, index) => (
          <div key={index} className="form-quiz">
            <h2>{config.label}</h2>
            <Input
              key={index}
              elementType={config.elementType}
              elementConfig={config.elementConfig}
              value={config.value}
              invalid={!config.valid}
              shouldValidate={config.validation}
              touched={config.touched}
              changed={event => handleChange(event, index)}
            />
          </div>
        ))}
      </div>
      <div className="form-group 1">
        <Button
          disabled={false}
          label="Back"
          btnType=""
          onClick={backHandler}
        />
        <Button
          label="Next"
          btnType="Success"
          disabled={false}
          onClick={continueHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default formDetails;
