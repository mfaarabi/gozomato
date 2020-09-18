import React from 'react';

const CitySuggestions = ({ data }) => {
  const { id, name } = data;

  return (
    <div>
      <div>id: {id}</div>
      <div>name: {name}</div>
    </div>
  );
};

export default CitySuggestions;
