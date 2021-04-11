import React, { useState } from 'react';

import styles from './styles';
import AddUser from './components/AddUser';
import AddMenuItem from './components/AddMenuItem';
import ListOfUsers from './components/ListOfUsers';

const PanelScreen = (props) => {
  const [currentMainRoute, setCurrentMainRoute] = useState('');
  const [currentSubRoute, setCurrentSubRoute] = useState('');

  const handleMainSelectChange = (e) => {
    setCurrentMainRoute(e.target.value);
  };

  const handleSubSelectChange = (e) => {
    setCurrentSubRoute(e.target.value);
  };

  const showOptions = () => {
    let result;
    switch (currentMainRoute) {
      case 'user': {
        result = (
          <>
            <option value={'user/add'}>Add</option>
            <option value={'user/list'}>List (update, delete)</option>
          </>
        );
        break;
      }
      case 'menu': {
        result = (
          <>
            <option value={'menu/addItem'}>Add item</option>
            <option value={'menu/addCategory'}>Add category</option>
          </>
        );
        break;
      }
      default: {
        return null;
      }
    }
    return (
      <select onChange={handleSubSelectChange} style={styles.input}>
        <option value={'default'} selected>
          Select option...
        </option>
        {result}
      </select>
    );
  };

  const showTable = () => {
    switch (currentSubRoute) {
      case 'user/add': {
        return <AddUser />;
      }
      case 'user/list': {
        return <ListOfUsers />;
      }
      case 'menu/addItem': {
        return <AddMenuItem />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div style={styles.container}>
      <select onChange={handleMainSelectChange} style={styles.input}>
        <option value={'default'}>Select option...</option>
        <option value={'user'}>User</option>
        <option value={'menu'}>Menu</option>
      </select>
      {showOptions()}
      {showTable()}
    </div>
  );
};

export default PanelScreen;
