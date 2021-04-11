import basicStyles from '../../../../assets/basicStyles';
import fontSizes from '../../../../assets/fontSizes';

const title = {
  display: 'inline-block',
  fontSize: fontSizes.large,
  lineHeight: '36px',
  position: 'relative',
  marginTop: '28px',
  marginBottom: '15px',
  textAlign: 'center',
};

const container = {
  ...basicStyles.centeringContainer,
  width: '300px',
  margin: '20px',
};

const lineContainer = {
  ...basicStyles.centeringContainer,
  flexDirection: 'row',
  width: '100%',
  position: 'relative',
};

const courseName = {
  display: 'inline-block',
  paddingRight: '8px',
  fontSize: fontSizes.medium,
  width: '85%',
  textTransform: 'capitalize',
  marginBottom: '4px',
  position: 'relative',
  clear: 'both',
  color: '#533834',
  overflow: 'hidden',
};

const description = {
  clear: 'both',
  color: '#938372',
  marginLeft: '5px',
  marginTop: 3,
  fontSize: fontSizes.small,
  fontWeight: 400,
  lineHeight: 1.5,
};

const price = {
  fontSize: fontSizes.medium,
  fontWeight: 400,
  right: 0,
  marginBottom: '4px',
  width: '15%',
  textAlign: 'right',
};

const styles = {
  title,
  container,
  courseName,
  description,
  lineContainer,
  price,
};

export default styles;
