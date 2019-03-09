import React from 'react';

const input = props => {
  let inputElement = null;
  const inputClasses = [];

  switch (props.elementType) {
    case 'input':
      if ('radio' === props.elementConfig.type) {
        inputElement = props.elementConfig.options.map((option, index) => {
          return (
            <div
              className={inputClasses.join(' ')}
              key={`${props.elementConfig.name}-${index}`}
            >
              <label>
                <input
                  type={props.elementConfig.type}
                  name={props.elementConfig.name}
                  value={option.value}
                  checked={props.selectedOption === option.value}
                  onChange={props.changed}
                  className="form-check-radio"
                />
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
