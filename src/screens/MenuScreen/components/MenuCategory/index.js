import React from 'react';
import styles from './styles';

const MenuCategory = (props) => {
  const showCategoryItems = () => {
    return props.items.map((item, index) => (
      <div key={index}>
        <div style={styles.lineContainer}>
          <p style={styles.courseName}>{`${index + 1}. ${item.name}`}</p>
          <p style={styles.price}>{item.price} zł</p>
        </div>
        <p style={styles.description}>{item.description}</p>
      </div>
    ));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>--{props.name.toUpperCase()}--</h2>
      {showCategoryItems()}
    </div>
  );
};

export default MenuCategory;
