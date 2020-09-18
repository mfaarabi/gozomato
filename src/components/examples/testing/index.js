import React, { useEffect, useState } from 'react';
import InputAndButton from './input-and-button';
import { apiCall } from './api';

const Testing = () => {
  const defaultInput = 'default';
  const [query, setQuery] = useState(defaultInput);
  const [result, setResult] = useState('');

  useEffect(() => {
    apiCall(query).then(setResult);
  }, [query]);

  return (
    <div>
      <div>result: {result}</div>
      <InputAndButton value={defaultInput} onChange={setQuery} />
    </div>
  );
};

export default Testing;
