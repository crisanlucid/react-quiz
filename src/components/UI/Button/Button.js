import React from 'react';

import './Button.scss';

const button = props => (
  <button
    disabled={props.disabled}
    className={['Button', props.btnType === 'Success' ? 'Success' : ''].join(
      ' '
    )}
    onClick={props.clicked}
  >
    {props.label}
  </button>
);

export default button;
