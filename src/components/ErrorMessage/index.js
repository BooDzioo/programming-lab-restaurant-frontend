import React from 'react';

import styles from './styles';

const ErrorMessage = (props) => {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorMessage;
