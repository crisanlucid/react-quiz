import React, { useState } from 'react';
import config from './FormConfig';
import Success from './Success';
import FormFirst from './FormFirst';
import FormDetails from './FormDetails';

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

  const handleChange = input => e => {
    console.log('changed');
  };

  const panelType = formState.quizForm[formState.step].typePanel || '';

  console.log('FormType:', panelType);

  const UIForm = panelType => {
    switch (panelType) {
      case 'formFirst':
        return (
          <FormFirst
            nextStep={nextStep}
            handleChange={handleChange}
            values={formState.quizForm[formState.step].values}
          />
        );
      case 'form':
        return (
          <FormDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formState.quizForm[formState.step].values}
          />
        );
      case 'confirm':
        return true;
      case 'success':
        return <Success />;

      default:
        return <div>The Form is Broken</div>;
    }
  };

  return (
    <div className="Form__wrapper">
      <h1>Quiz Form</h1>
      {UIForm(panelType)}
    </div>
  );
};

export default form;
