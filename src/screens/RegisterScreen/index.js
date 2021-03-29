import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './styles';
import FormTextInput from '../../components/FormTextInput';
import { bindActionCreators } from 'redux';
import { registerUser } from '../../store/auth/actions';

const RegisterScreen = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleRegisterClick = () => {
    if (password === confirmPassword) {
      props.registerUser(name, surname, email, password);
    }
  };

  return (
    <div style={styles.container}>
      <FormTextInput
        name={'name'}
        id={'name'}
        onChange={(e) => handleInputChange(e, setName)}
        value={name}
        placeholder={'Name'}
      />
      <FormTextInput
        name={'surname'}
        id={'surname'}
        onChange={(e) => handleInputChange(e, setSurname)}
        value={surname}
        placeholder={'Surname'}
      />
      <FormTextInput
        name={'email'}
        id={'email'}
        onChange={(e) => handleInputChange(e, setEmail)}
        value={email}
        placeholder={'Email'}
      />
      <FormTextInput
        type={'password'}
        name={'password'}
        id={'password'}
        onChange={(e) => handleInputChange(e, setPassword)}
        value={password}
        placeholder={'Password'}
      />
      <FormTextInput
        type={'password'}
        name={'password'}
        id={'password'}
        onChange={(e) => handleInputChange(e, setConfirmPassword)}
        value={confirmPassword}
        placeholder={'Confirm Password'}
      />
      <button onClick={handleRegisterClick}>Zarejestruj</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      registerUser,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
