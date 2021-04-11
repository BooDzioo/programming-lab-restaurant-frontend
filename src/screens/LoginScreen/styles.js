import styles2 from '../RegisterScreen/styles';
import COLORS from '../../assets/colors';

const button = {
  ...styles2.button,
};

const smallButton = {
  outline: 'none',
  background: COLORS.ChileanFire,
  border: 0,
  borderRadius: '4px',
  padding: '4px 10px',
  marginBottom: '20px',
  color: COLORS.white,
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 500,
  lineHeight: 'inherit',
  textTransform: 'uppercase',
  cursor: 'pointer',
  textDecoration: 'none',
  letterSpacing: '.06em',
  width: '12%',
  textAlign: 'center',
};

const container = {
  ...styles2.container,
};

const title = {
  ...styles2.title,
};

const styles = { button, container, title, smallButton };

export default styles;
