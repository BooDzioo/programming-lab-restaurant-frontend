import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountScreen from '../../screens/AccountScreen';
import { ROUTES } from '../../constants/constants';
import styles from './styles';
import ChangePasswordScreen from '../../screens/ChangePasswordScreen';

const AccountSwitch = (props) => {
  return (
    <div style={styles.container}>
      <Switch>
        <Route exact path={ROUTES.ACCOUNT.HOME} component={AccountScreen} />
        <Route exact path={ROUTES.ACCOUNT.CHANGE_PASSWORD} component={ChangePasswordScreen} />
      </Switch>
    </div>
  );
};

export default AccountSwitch;
