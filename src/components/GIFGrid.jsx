import React from 'react';
import { GIFGridItem } from './GIFGridItem';
import { useFetchGIFS } from '../hooks/useFetchGIFS';

export const GIFGrid = ({ category }) => {
  const { data: images, loading } = useFetchGIFS(category);

  return (
    <>
      <h3>{category}</h3>
      <h4>{loading ? 'Cargando' : 'Cargado'}</h4>
      <div className="card-grid">
        {images.map((image) => {
          return <GIFGridItem key={image.id} {...image}></GIFGridItem>;
        })}
      </div>
    </>
  );
};
