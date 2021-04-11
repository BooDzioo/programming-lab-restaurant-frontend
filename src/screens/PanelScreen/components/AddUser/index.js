import React, { useState, useEffect } from 'react';
import FormTextInput from '../../../../components/FormTextInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../../styles';
import { addUser } from '../../../../store/panel/actions';

const AddUser = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('A');
  const [commited, setCommited] = useState(false);

  console.log(name, surname, email, password, confirmPassword, accountType);
  useEffect(() => {
    console.log(props.addUserPending, !props.addUserErrorMessage);
    console.log(!props.addUserPending, !props.addUserErrorMessage, commited);
    if (!props.addUserPending && !props.addUserErrorMessage && commited) {
      setName('');
      setSurname('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAccountType('');
      setCommited(false);
    }
  }, [props.addUserPending, props.addUserErrorMessage, commited]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleConfirmClick = () => {
    if (name && surname && email && password && confirmPassword && accountType) {
      if (password === confirmPassword) {
        props.addUser(name, surname, email, password, accountType);
        setCommited(true);
      } else {
      }
    } else {
      console.log('not confirmed');
      console.log(name, surname, email, password, confirmPassword, accountType);
    }
  };

  return (
    <>
      <FormTextInput label={'name'} value={name} onChange={(e) => handleInputChange(e, setName)} />
      <FormTextInput
        label={'surname'}
        value={surname}
        onChange={(e) => handleInputChange(e, setSurname)}
      />
      <FormTextInput
        label={'email'}
        value={email}
        onChange={(e) => handleInputChange(e, setEmail)}
      />
      <FormTextInput
        label={'password'}
        type={'password'}
        value={password}
        onChange={(e) => handleInputChange(e, setPassword)}
      />
      <FormTextInput
        label={'confirm password'}
        type={'password'}
        value={confirmPassword}
        onChange={(e) => handleInputChange(e, setConfirmPassword)}
      />
      <label style={styles.label}>
        ACCOUNT TYPE
        <select
          defaultValue={accountType}
          style={styles.input}
          onChange={(e) => handleInputChange(e, setAccountType)}
        >
          <option value={'B'}>Basic (B)</option>
          <option value={'A'}>Admin (A)</option>
        </select>
      </label>
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
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
