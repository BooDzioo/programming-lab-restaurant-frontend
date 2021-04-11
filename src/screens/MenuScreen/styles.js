import basicStyles from '../../assets/basicStyles';
import fontSizes from '../../assets/fontSizes';
import COLORS from '../../assets/colors';

const container = {
  ...basicStyles.centeringContainer,
  ...basicStyles.fullWindowContainer,
  backgroundColor: COLORS.white,
};

const title = {
  display: 'inline-block',
  fontSize: fontSizes.ultimate,
  lineHeight: '36px',
  position: 'relative',
  marginTop: '28px',
  marginBottom: '15px',
  textAlign: 'center',
};

const categoriesListContainer = {
  ...basicStyles.centeringContainer,
  flexDirection: 'row',
  width: '100%',
  flexWrap: 'wrap',
};

const styles = { container, title, categoriesListContainer };

export default styles;
