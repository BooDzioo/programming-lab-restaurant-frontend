import React from 'react';

const MenuCategory = (props) => {
  const showCategoryItems = () => {
    return props.items.map((item, index) => (
      <div key={index}>
        <p>{`${index + 1}. ${item.name} ${item.price}`}</p>
        <p>{item.description}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>{props.name}</h2>
      {showCategoryItems()}
    </div>
  );
};

export default MenuCategory;
