import React, { useState } from 'react';
import config from './FormConfig';
import Success from './Success';
import FormFirst from './FormFirst';
import FormDetails from './FormDetails';
import FormConfirm from './Confirm';

const form = () => {
  const [formState, updateFormState] = useState(config);
  const { quizForm, step } = formState;

  const nextStep = () => {
    updateFormState({
      ...formState,
      step: step + 1
    });
  };

  const prevStep = () => {
    updateFormState({
      ...formState,
      step: step - 1
    });
  };

  const handleChange = (event, inputIdentifier) => {
    const updatedForm = {
      ...formState
    };
    const updatedFormElement = {
      ...quizForm[formState.step]['values'][inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = true; //TO DO: implement validation
    updatedFormElement.touched = true;
    updatedForm['quizForm'][formState.step]['values'][
      inputIdentifier
    ] = updatedFormElement;

    updateFormState({
      ...updatedForm,
      step: step,
      formIsValid: true
    });
  };

  const panelType = quizForm[formState.step].typePanel || '';

  const UIForm = panelType => {
    switch (panelType) {
      case 'formFirst':
        return (
          <FormFirst
            nextStep={nextStep}
            handleChange={handleChange}
            values={quizForm[formState.step].values}
          />
        );
      case 'form':
        return (
          <FormDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={quizForm[formState.step].values}
          />
        );
      case 'confirm':
        return (
          <FormConfirm
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={quizForm}
          />
        );
      case 'success':
        return <Success />;

      default:
        return <div>The Form is Broken</div>;
    }
  };

  return <div className="Form__wrapper">{UIForm(panelType)}</div>;
};

export default form;
