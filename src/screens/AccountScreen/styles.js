import COLORS from '../../assets/colors';
import styles2 from '../RegisterScreen/styles';

const container = {
  width: '80%',
  backgroundColor: COLORS.Nomad,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const title = {
  ...styles2.title,
};

const button = {
  ...styles2.button,
};

const styles = { container, title, button };

export default styles;
