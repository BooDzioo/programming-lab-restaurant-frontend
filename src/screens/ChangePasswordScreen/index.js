import React, { useState } from 'react';
import FormTextInput from '../../components/FormTextInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeUserPassword } from '../../store/user/actions';

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
      <FormTextInput
        label={'Current Password'}
        value={currentPassword}
        onChange={(e) => handleInputChange(e, setCurrentPassword)}
      />
      <FormTextInput
        label={'New Password'}
        value={newPassword}
        onChange={(e) => handleInputChange(e, setNewPassword)}
      />
      <FormTextInput
        label={'Confirm New Password'}
        value={confirmNewPassword}
        onChange={(e) => handleInputChange(e, setConfirmNewPassword)}
      />
      <button onClick={handleChangePasswordClick}>Change password</button>
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
