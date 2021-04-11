import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMenu } from '../../store/menu/actions';
import MenuCategory from './components/MenuCategory';
import styles from './styles';

const MenuScreen = (props) => {
  useEffect(() => {
    props.getMenu();
  }, []);

  const showMenuCategories = () => {
    const categoriesNames = Object.keys(props.menu);
    return categoriesNames.map((categoryName, index) => {
      return <MenuCategory key={index} name={categoryName} items={props.menu[categoryName]} />;
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>MENU</h1>
      <div style={styles.categoriesListContainer}>{showMenuCategories()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menu: state.menu.menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getMenu,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
