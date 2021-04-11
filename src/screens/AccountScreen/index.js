import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { getUserInfo } from '../../store/user/actions';
import { logoutUser } from '../../store/auth/actions';
import { connect } from 'react-redux';
import FormTextInput from '../../components/FormTextInput';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/constants';
import styles from './styles';

const AccountScreen = (props) => {
  const history = useHistory();

  useEffect(() => {
    props.getUserInfo();
  }, []);

  const onChangePasswordClick = () => {
    history.push(ROUTES.ACCOUNT.CHANGE_PASSWORD);
  };

  return (
    <>
      <h1 style={styles.title}>Account</h1>
      <FormTextInput value={props.name} label={'Name'} disabled />
      <FormTextInput value={props.surname} label={'Surname'} disabled />
      <FormTextInput value={props.email} label={'Email'} disabled />
      <button onClick={onChangePasswordClick} style={styles.button}>
        Change Password
      </button>
      <button onClick={props.logoutUser} style={styles.button}>
        Logout
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    surname: state.user.surname,
    email: state.user.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUserInfo,
      logoutUser,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
