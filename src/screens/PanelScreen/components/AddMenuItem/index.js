import React, { useState } from 'react';
import FormTextInput from '../../../../components/FormTextInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../../styles';

const AddMenuItem = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleConfirmClick = () => {};

  return (
    <>
      <FormTextInput label={'name'} onChange={(e) => handleInputChange(e, setName)} />
      <FormTextInput label={'surname'} onChange={(e) => handleInputChange(e, setSurname)} />
      <FormTextInput label={'email'} onChange={(e) => handleInputChange(e, setEmail)} />
      <FormTextInput
        label={'password'}
        type={'password'}
        onChange={(e) => handleInputChange(e, setPassword)}
      />
      <FormTextInput
        label={'confirm password'}
        type={'password'}
        onChange={(e) => handleInputChange(e, setConfirmPassword)}
      />
      <button style={styles.button} onClick={handleConfirmClick}>
        CONFIRM
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMenuItem);
