import React, { useState } from 'react';

const InputAndButton = ({ value, onChange }) => {
  const [input, setInput] = useState(value);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          onChange(input);
        }}
      >
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">change with form submit</button>
      </form>
      <button onClick={() => onChange(input)}>change with useEffect</button>
    </>
  );
};

export default InputAndButton;
