import React, { useState } from 'react';
import config from './FormConfig';
import Success from './Success';

const form = () => {
  const [formState, updateFormState] = useState(config);

  const nextStep = () => {
    const { step } = formState;
    useState({
      step: step + 1
    });
  };

  const prevStep = () => {
    const { step } = formState;
    useState({
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
        return <div>formFirst</div>;
      case 'success':
        return <Success />;

      default:
        return <div>The Form is Broken</div>;
    }
  };

  return (
    <div>
      <h1>Quiz Form</h1>
      {UIForm(panelType)}
    </div>
  );
};

export default form;
