import React, { useState } from 'react';
import { AddCategory } from '../components/AddCategory';
import { GIFGrid } from '../components/GIFGrid';

export const GIFExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch Man']);

  return (
    <>
      <h2>GIF Expert App</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ul>
        {categories.map((category) => (
          <GIFGrid category={category} key={category}></GIFGrid>
        ))}
      </ul>
    </>
  );
};
