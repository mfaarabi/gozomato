import React, { useEffect, useState } from 'react';
import { apiCall } from './api';

const Testing = () => {
  const [input, setInput] = useState('default');
  const [query, setQuery] = useState(input);
  const [result, setResult] = useState('');

  useEffect(() => {
    apiCall(query).then(setResult);
  }, [query]);

  return (
    <div>
      <div>result: {result}</div>
      <form
        onSubmit={e => {
          e.preventDefault();
          apiCall(input).then(setResult);
        }}
      >
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">change with form submit</button>
      </form>
      <button onClick={() => setQuery(input)}>change with useEffect</button>
    </div>
  );
};

export default Testing;
