import React, { useState } from 'react';

const form = () => {
  const [formState, updateFormState] = useState({
    quizForm: [
      {
        key: '1',
        typePanel: 'success', //formFirst
        values: {
          quiz_1: {
            label: 'Quiz_1',
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Street'
            },
            value: '',
            validation: {
              required: true
            },
            valid: false,
            touched: false
          },
          quiz_2: {
            label: 'Quiz_2',
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Street'
            },
            value: '',
            validation: {
              required: true
            },
            valid: false,
            touched: false
          }
        }
      },
      {
        key: '2',
        typePanel: 'form',
        values: {
          quiz_3: {
            label: 'Quiz_3',
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Street'
            },
            value: '',
            validation: {
              required: true
            },
            valid: false,
            touched: false
          },
          quiz_4: {
            label: 'Quiz_4',
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Street'
            },
            value: '',
            validation: {
              required: true
            },
            valid: false,
            touched: false
          }
        }
      },
      {
        key: '3',
        typePanel: 'confirm',
        values: {}
      },
      {
        key: '4',
        typePanel: 'success'
      }
    ],
    step: 0
  });

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
      case 'success':
        return <div>Success Submit</div>;

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
