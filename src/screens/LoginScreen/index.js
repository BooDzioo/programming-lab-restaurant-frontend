import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styles from '../RegisterScreen/styles';
import FormTextInput from '../../components/FormTextInput';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../store/auth/actions';
import { Link, Redirect } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!props.loginPending && props.isLoggedIn && submitted) {
      setShouldRedirect(true);
    }
  }, [props.isLoggedIn, submitted, props.loginPending]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleLoginClick = () => {
    props.loginUser(email, password);
    setSubmitted(true);
  };

  const showErrorMessage = () => {
    return props.loginFailed && <ErrorMessage message={props.loginErrorMessage} />;
  };

  const redirect = () => {
    return shouldRedirect && <Redirect exact to={'/'} />;
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
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
      <button onClick={handleLoginClick}>Zaloguj</button> <br />
      <Link to={'./register'}>Zarejestruj</Link>
      {showErrorMessage()}
      {redirect()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    loginPending: state.auth.loginPending,
    loginFailed: state.auth.loginFailed,
    loginErrorMessage: state.auth.loginErrorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loginUser,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
