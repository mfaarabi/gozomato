import React, { useState, useEffect } from 'react';

const yourApiCall = () => Promise.resolve('hello world!');

const YourComponentName = () => {
  [yourState, setYourState] = useState();

  useEffect(() => {
    yourApiCall.then(setYourState);
  });

  return (
    <div>
      <div>Your element</div>
      <div>Your state has a default value of {yourState}</div>
    </div>
  );
};

export default YourComponentName;
