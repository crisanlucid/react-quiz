import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './Form.scss';

const formFirst = props => {
  const { values, handleChange } = props;

  const continueHandler = e => {
    e.preventDefault();
    props.nextStep();
  };

  const formElementsArray = [];
  for (let key in values) {
    formElementsArray.push({
      id: key,
      config: values[key]
    });
  }

  return (
    <React.Fragment>
      <h1>Form Quiz</h1>
      <div className="Form__wrapper--quiz">
        {formElementsArray.map(formElement => (
          <div key={formElement.id} className="form-quiz">
            <h2>{formElement.config.label}</h2>
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              selectedOption={formElement.config.elementConfig.defaultOption}
              changed={event => handleChange(event, formElement.id)}
            />
          </div>
        ))}
      </div>
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
    </React.Fragment>
  );
};

export default formFirst;
