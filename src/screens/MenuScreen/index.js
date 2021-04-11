import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMenu } from '../../store/menu/actions';
import MenuCategory from './components/MenuCategory';

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
    <div>
      <h1>Menu screen</h1>
      {showMenuCategories()}
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
