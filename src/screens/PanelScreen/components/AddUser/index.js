import React, { useState, useEffect } from 'react';
import FormTextInput from '../../../../components/FormTextInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../../styles';
import { addUser, clearAddUserErrorMessage } from '../../../../store/panel/actions';
import ErrorMessage from '../../../../components/ErrorMessage';
import ConfirmationMessage from '../../../../components/ConfirmationMessage';

const AddUser = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('B');
  const [committed, setCommitted] = useState(false);

  useEffect(() => {
    if (!props.addUserPending && !props.addUserErrorMessage && committed) {
      clearForm();
    }
  }, [props.addUserPending, props.addUserErrorMessage, committed]);

  function clearForm() {
    setName('');
    setSurname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAccountType('');
  }

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleInputClick = () => {
    props.clearAddUserErrorMessage();
    setCommitted(false);
  };

  const handleConfirmClick = () => {
    if (name && surname && email && password && confirmPassword && accountType) {
      if (password === confirmPassword) {
        props.addUser(name, surname, email, password, accountType);
        setCommitted(true);
      }
    }
  };

  const showResult = () => {
    return props.addUserErrorMessage && committed ? (
      <ErrorMessage message={props.addUserErrorMessage} />
    ) : committed ? (
      <ConfirmationMessage message={'User has been created!'} />
    ) : null;
  };

  return (
    <>
      <h1 style={styles.title}>Add user</h1>
      <FormTextInput label={'name'} value={name} onChange={(e) => handleInputChange(e, setName)} />
      <FormTextInput
        label={'surname'}
        value={surname}
        onClick={handleInputClick}
        onChange={(e) => handleInputChange(e, setSurname)}
      />
      <FormTextInput
        label={'email'}
        value={email}
        onClick={handleInputClick}
        onChange={(e) => handleInputChange(e, setEmail)}
      />
      <FormTextInput
        label={'password'}
        type={'password'}
        value={password}
        onClick={handleInputClick}
        onChange={(e) => handleInputChange(e, setPassword)}
      />
      <FormTextInput
        label={'confirm password'}
        type={'password'}
        value={confirmPassword}
        onClick={handleInputClick}
        onChange={(e) => handleInputChange(e, setConfirmPassword)}
      />
      <label style={styles.label}>
        ACCOUNT TYPE
        <select
          defaultValue={accountType}
          style={styles.input}
          onClick={(e) => {
            handleInputChange(e, setAccountType);
            handleInputClick();
          }}
        >
          <option value={'B'}>Basic (B)</option>
          <option value={'A'}>Admin (A)</option>
        </select>
      </label>
      {showResult()}
      <button style={styles.button} onClick={clearForm}>
        CLEAR
      </button>
      <button style={styles.button} onClick={handleConfirmClick}>
        CONFIRM
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    addUserPending: state.panel.addUserPending,
    addUserErrorMessage: state.panel.addUserErrorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addUser,
      clearAddUserErrorMessage,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
