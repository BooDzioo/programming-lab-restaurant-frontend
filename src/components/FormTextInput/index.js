import React, { useState } from 'react';
import styles from './styles';

const FormTextInput = (props) => {
  const [isValid, setIsValid] = useState(true);
  return <input style={styles.input} type="text" autoComplete={'off'} {...props} />;
};

export default FormTextInput;
