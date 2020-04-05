import React from 'react';
import CategoryGroup from './CategoryGroup';

const Categories = ({ categories }) => {
  return Object.keys(categories).sort().reverse().map(categoryKey => (
    <CategoryGroup
      key={categoryKey}
      category={categoryKey}
      comicBooks={categories[categoryKey]}
    />
  ));
};

export default Categories;
