import React, { useState } from 'react';
import config from './FormConfig';
import Success from './Success';
import FormFirst from './FormFirst';

const form = () => {
  const [formState, updateFormState] = useState(config);
  const { quizForm, step } = formState;

  const nextStep = () => {
    updateFormState({
      step: step + 1
    });
  };

  const prevStep = () => {
    updateFormState({
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
      case 'formDetails':
        return true;
      case 'success':
        return <Success />;

      default:
        return <div>The Form is Broken</div>;
    }
  };

  return (
    <div className="Form--wrapper">
      <h1>Quiz Form</h1>
      {UIForm(panelType)}
    </div>
  );
};

export default form;
