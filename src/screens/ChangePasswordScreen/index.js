import React, { useState } from 'react';
import FormTextInput from '../../components/FormTextInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeUserPassword } from '../../store/user/actions';
import styles from './styles';

const ChangePasswordScreen = (props) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleChangePasswordClick = () => {
    if (currentPassword && newPassword && confirmNewPassword) {
      if (newPassword === confirmNewPassword) {
        props.changeUserPassword(currentPassword, newPassword);
      }
    }
  };

  return (
    <>
      <h1 style={styles.title}>Change password</h1>
      <FormTextInput
        label={'Current Password'}
        value={currentPassword}
        type={'password'}
        onChange={(e) => handleInputChange(e, setCurrentPassword)}
      />
      <FormTextInput
        label={'New Password'}
        value={newPassword}
        type={'password'}
        onChange={(e) => handleInputChange(e, setNewPassword)}
      />
      <FormTextInput
        label={'Confirm New Password'}
        value={confirmNewPassword}
        type={'password'}
        onChange={(e) => handleInputChange(e, setConfirmNewPassword)}
      />
      <button onClick={handleChangePasswordClick} style={styles.button}>
        Change password
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeUserPassword,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordScreen);
