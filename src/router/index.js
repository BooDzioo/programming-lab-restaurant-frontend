import React, { useEffect } from 'react';
import { Switch, Link, Route, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './styles';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import { ROUTES } from '../constants/constants';
import AccountSwitch from './account';

const Navigator = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (!props.isLoggedIn) {
      history.replace('/');
    }
  }, [props.isLoggedIn]);

  return (
    <div style={styles.container}>
      <div style={styles.navContainer}>
        <nav style={styles.nav}>
          <ul style={styles.ul}>
            <li style={styles.navItem}>
              <Link style={styles.link} to={'/'}>
                Main
              </Link>
            </li>
            <li style={styles.loginButton}>
              {props.isLoggedIn ? (
                <Link style={styles.link} to={'/account'}>
                  Account
                </Link>
              ) : (
                <Link style={styles.link} to={'/login'}>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path={ROUTES.HOME} component={MainScreen} />
        <Route exact path={ROUTES.REGISTER} component={RegisterScreen} />
        <Route exact path={ROUTES.LOGIN} component={LoginScreen} />
        <Route path={ROUTES.ACCOUNT.HOME} component={AccountSwitch} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(Navigator);