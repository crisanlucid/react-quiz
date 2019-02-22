import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './Form.scss';

const formFirst = props => {
  const { values, handleChange } = props;

  const fieldsForm = values;
  const continueHandler = e => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div>
      {Object.values(fieldsForm).map((config, index) => (
        <div key={index}>
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
    </div>
  );
};

export default formFirst;
