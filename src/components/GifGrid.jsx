import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GrifItem from './GifItem';

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3> {category} </h3>

      {isLoading && <h2>Loading...</h2>}

      <div className='card-grid'>
        {
          images.map( ( image ) => (
            <GrifItem key={image.id} { ...image } />
          ))
        }

      </div>
    </>
  )
}
