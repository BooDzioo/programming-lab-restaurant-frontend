import COLORS from '../../assets/colors';
import fontSizes from '../../assets/fontSizes';

const container = {
  backgroundColor: COLORS.Nomad,
  width: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
};

const button = {
  width: '20vh',
  outline: 'none',
  background: COLORS.ChileanFire,
  border: 0,
  borderRadius: '4px',
  padding: '6px 12px',
  marginBottom: '20px',
  color: COLORS.white,
  fontFamily: 'inherit',
  fontSize: fontSizes.small,
  fontWeight: 500,
  lineHeight: 'inherit',
  textTransform: 'uppercase',
  cursor: 'pointer',
  letterSpacing: '.06em',
  textAlign: 'center',
};

const title = {
  fontWeight: 550,
  textTransform: 'uppercase',
  marginBottom: '15px',
  letterSpacing: '.05rem',
};

const styles = { container, button, title };

export default styles;
