import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './styles';
import FormTextInput from '../../components/FormTextInput';
import { bindActionCreators } from 'redux';
import { registerUser } from '../../store/auth/actions';
import ErrorMessage from '../../components/ErrorMessage';
import { Redirect } from 'react-router-dom';

const RegisterScreen = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!props.registrationPending && props.isLoggedIn && submitted) {
      setShouldRedirect(true);
    }
  }, [props.isLoggedIn, submitted, props.registrationPending]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleRegisterClick = () => {
    if (password === confirmPassword) {
      props.registerUser(name, surname, email, password);
      setSubmitted(true);
    }
  };

  const showErrorMessage = () => {
    return props.registrationFailed && <ErrorMessage message={props.registrationErrorMessage} />;
  };

  const redirect = () => {
    return shouldRedirect && <Redirect exact to={'/'} />;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>REGISTER</h1>
      <FormTextInput
        name={'name'}
        id={'name'}
        onChange={(e) => handleInputChange(e, setName)}
        value={name}
        label={'Name'}
      />
      <FormTextInput
        name={'surname'}
        id={'surname'}
        onChange={(e) => handleInputChange(e, setSurname)}
        value={surname}
        label={'Surname'}
      />
      <FormTextInput
        name={'email'}
        id={'email'}
        onChange={(e) => handleInputChange(e, setEmail)}
        value={email}
        label={'Email'}
      />
      <FormTextInput
        type={'password'}
        name={'password'}
        id={'password'}
        onChange={(e) => handleInputChange(e, setPassword)}
        value={password}
        label={'Password'}
      />
      <FormTextInput
        type={'password'}
        name={'password'}
        id={'password'}
        onChange={(e) => handleInputChange(e, setConfirmPassword)}
        value={confirmPassword}
        label={'Confirm Password'}
      />
      <button onClick={handleRegisterClick} style={styles.button}>
        REGISTER
      </button>
      {showErrorMessage()}
      {redirect()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    registrationPending: state.auth.registrationPending,
    registrationFailed: state.auth.registrationFailed,
    registrationErrorMessage: state.auth.registrationErrorMessage,
  };
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
