import React, { useState } from 'react';
import FormTextInput from '../../components/FormTextInput';

const ChangePasswordScreen = (props) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  return (
    <>
      <FormTextInput label={'Current Password'} />
      <FormTextInput label={'New Password'} />
      <FormTextInput label={'Confirm New Password'} />
    </>
  );
};

export default ChangePasswordScreen;
