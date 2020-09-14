import React from 'react';

const Restaurants = ({ data }) => {
  const { name, picture, cuisines, priceRange, rating } = data;

  return (
    <div>
      <div>name: {name}</div>
      <div>picture: {picture}</div>
      <div>cuisines: {cuisines}</div>
      <div>priceRange: {priceRange}</div>
      <div>rating: {rating}</div>
    </div>
  );
};

export default Restaurants;
