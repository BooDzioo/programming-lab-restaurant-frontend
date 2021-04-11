import fontSizes from '../../assets/fontSizes';
import COLORS from '../../assets/colors';

const input = {
  display: 'block',
  outline: 'none',
  background: COLORS.blackOpaqueLarge,
  width: '100%',
  border: 0,
  borderRadius: '4px',
  padding: '12px 20px',
  color: COLORS.blackOpaqueMedium,
  fontWeight: 500,
  transition: '0.3s ease',
};

const label = {
  margin: '0 0 10px',
  color: COLORS.blackOpaqueMedium,
  fontSize: fontSizes.medium,
  fontWeight: 500,
  lineHeight: 0.9,
  textTransform: 'uppercase',
  letterSpacing: '.15em',
};

const styles = { input, label };

export default styles;
