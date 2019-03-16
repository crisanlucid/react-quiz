import React from 'react';

import './Input.scss';

const input = props => {
  let inputElement = null;
  const inputClasses = ['m-checkbox'];
  const labelClassName = 'm-checkbox__label';

  switch (props.elementType) {
    case 'input':
      if ('radio' === props.elementConfig.type) {
        inputElement = props.elementConfig.options.map((option, index) => {
          return (
            <div
              className={inputClasses.join(' ')}
              key={`${props.elementConfig.name}-${index}`}
            >
              <input
                id={`${props.elementConfig.name}-${option.value}`}
                type={props.elementConfig.type}
                name={props.elementConfig.name}
                value={option.value}
                checked={props.selectedOption === option.value}
                onChange={props.changed}
                className="m-checkbox__input"
              />
              <label
                className={labelClassName}
                htmlFor={`${props.elementConfig.name}-${option.value}`}
              >
                {option.label}
              </label>
            </div>
          );
        });
      } else {
        inputElement = (
          <input
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        );
      }

      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className="">
      <label className="">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
