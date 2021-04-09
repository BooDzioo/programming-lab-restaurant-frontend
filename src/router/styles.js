import COLORS from '../assets/colors';
import basicStyles from '../assets/basicStyles';

const container = {
  ...basicStyles.centeringContainer,
  backgroundColor: 'green',
  paddingTop: '7vh',
  width: '100%',
  minHeight: '100%',
};

const navContainer = {
  display: 'flex',
  flexDirection: 'row-reverse',
  backgroundColor: COLORS.CodGray,
  width: '100%',
  height: '7vh',
  position: 'fixed',
  left: 0,
  top: 0,
  paddingRight: '2%',
  boxSizing: 'border-box',
};

const nav = {
  width: '100%',
};

const ul = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  width: '100%',
};

const navItem = {
  marginLeft: 20,
  marginRight: 20,
  listStyleType: 'none',
};

const link = {
  ...basicStyles.centeringContainer,
  flex: 1,
  textDecoration: 'none',
};

const loginButton = {
  ...basicStyles.centeringContainer,
  ...navItem,
  backgroundColor: COLORS.ChileanFire,
  borderRadius: 10,
  width: 100,
};

const styles = {
  container,
  navContainer,
  nav,
  navItem,
  link,
  loginButton,
  ul,
};

export default styles;
