import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from '../RegisterScreen/styles';
import FormTextInput from '../../components/FormTextInput';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../store/auth/actions';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleLoginClick = () => {
    props.loginUser(email, password);
  };

  return (
    <div style={styles.container}>
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
      <button onClick={handleLoginClick}>Zaloguj</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
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
