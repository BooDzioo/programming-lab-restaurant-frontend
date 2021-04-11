import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from '../../constants/constants';
import styles from './styles';

const PanelSwitch = (props) => {
  return (
    <div style={styles.container}>
      <Switch>
        <Route exact path={ROUTES.PANEL.HOME} component={PanelScreen} />
        {/*<Route exact path={ROUTES.ACCOUNT.CHANGE_PASSWORD} component={ChangePasswordScreen} />*/}
      </Switch>
    </div>
  );
};

export default PanelSwitch;
