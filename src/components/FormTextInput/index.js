import React, { useState } from 'react';
import styles from './styles';

const FormTextInput = (props) => {
  const [isValid, setIsValid] = useState(true);
  return (
    <label>
      {props.label}
      <br />
      <input style={styles.input} type="text" autoComplete={'off'} {...props} />
      <br />
    </label>
  );
};

export default FormTextInput;
