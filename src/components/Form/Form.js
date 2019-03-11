import React, { useState, useEffect } from 'react';
import config from './FormConfig';
import Success from './Success';
import FormFirst from './FormFirst';
import FormDetails from './FormDetails';
import FormConfirm from './Confirm';

const form = () => {
  const keyLocalStorage = 'formData';
  const initialConfig = () =>
    JSON.parse(window.localStorage.getItem(keyLocalStorage)) || config;
  const [formState, updateFormState] = useState(initialConfig);
  const { quizForm, step } = formState;

  const nextStep = () => {
    const currStep = step + 1;
    updateFormState({
      ...formState,
      step: currStep
    });

    initDefaultCheckedInput(quizForm[formState.step]['values'], step, currStep);
  };

  const prevStep = () => {
    const currStep = step - 1;
    updateFormState({
      ...formState,
      step: currStep
    });

    initDefaultCheckedInput(quizForm[formState.step]['values'], step, currStep);
  };

  const initDefaultCheckedInput = (currentFormPage, step, currStep) => {
    let updateFormPage = { ...currentFormPage };
    const updatedForm = {
      ...formState
    };

    for (let key in updateFormPage) {
      if ('text' !== updateFormPage[key]['elementConfig']['type']) {
        updateFormPage[key]['value'] = updateFormPage[
          key
        ].elementConfig.options.reduce((acc, { label, value }) => {
          if (value === updateFormPage[key].elementConfig.defaultOption) {
            acc = label;
          }
          return acc;
        }, '');
      }
    }
    updatedForm['quizForm'][step]['values'] = updateFormPage;

    updateFormState({
      ...updatedForm,
      step: currStep,
      formIsValid: true
    });
  };

  const handleChange = (event, inputIdentifier) => {
    const updatedForm = {
      ...formState
    };
    const updatedFormElement = {
      ...quizForm[formState.step]['values'][inputIdentifier]
    };

    if ('radio' === updatedFormElement.elementConfig.type) {
      updatedFormElement.elementConfig.defaultOption =
        event.currentTarget.value;
      updatedFormElement.value = updatedFormElement.elementConfig.options.reduce(
        (acc, { label, value }) => {
          if (value === event.currentTarget.value) {
            acc = label;
          }
          return acc;
        },
        ''
      );
    } else {
      updatedFormElement.value = event.target.value;
    }

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

  let panelType = quizForm[formState.step].typePanel || '';

  const calcAnswersTOTAL = updatedForm => {
    const listAnswers = { ...updatedForm };

    const listFieldsRawForm = Object.values(listAnswers).reduce(
      (acc, { values }) => {
        acc.push(Object.values(values));
        return acc;
      },
      []
    );

    const fieldsForm = listFieldsRawForm.reduce((acc, curr) => {
      acc.push(...curr);
      return acc;
    }, []);

    const sumTOTAL = fieldsForm.reduce((acc, { elementConfig }) => {
      const answer_no = parseInt(elementConfig.defaultOption) || 0;
      acc = acc + answer_no;
      return acc;
    }, 0);

    return sumTOTAL;
  };

  useEffect(() => {
    window.localStorage.setItem(keyLocalStorage, JSON.stringify(formState));

    if (panelType === 'success') {
      window.localStorage.clear();
    }
  }, [formState]);

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
        let primaryMessage = 'Game Over';
        const points = calcAnswersTOTAL(quizForm);

        if (points >= 6) {
          primaryMessage = 'Let`s schedule a phone-call!';
        }
        console.info('total points:' + points);

        return <Success message={primaryMessage} />;
      default:
        return <div>The Form is Broken</div>;
    }
  };

  return <div className="Form__wrapper">{UIForm(panelType)}</div>;
};

export default form;
