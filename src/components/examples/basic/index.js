import React, { useState } from 'react';
import ComponentOnAnotherDirectory from './component-on-another-directory';

const BasicJS = () => {
  // declaring variable
  var a = 'a';
  let b = 'b';
  const c = 'c';

  // declaring function into variable
  const myFunction = (a, b, c) => a + b + c;
  const myFunctionWithOperation = (a, b, c) => {
    const d = 'd';
    return a + b + c + d;
  };

  // pass a function into parameter and invoking it
  const myFunctionAsParameter = () => 'here is your string';
  const myElementFromStringFunction = stringf => <h4>{stringf()}</h4>;

  // control statement (if branching) using one-liner expressions
  const aNumber = 1;
  let e;
  if (aNumber % 2 === 0) {
    e = 'even';
  } else {
    e = 'odd';
  }
  const f = aNumber % 2 === 0 ? 'even' : 'odd';
  const g = aNumber === 1 && 'yes';
  const h = aNumber === 2 || 'no';

  return (
    <div>
      <div>
        Here we'll talk about variables, (arrow) function, and string
        manipulation
      </div>
      <div>{myFunction(a, b, c)}</div>
      <div>{myFunctionWithOperation(a, b, c)}</div>
      {myElementFromStringFunction(myFunctionAsParameter)}
      <div>The value of e is {e}</div>
      <div>The value of f is {f}</div>
      <div>The value of g is {g}</div>
      <div>The value of h is {h}</div>
    </div>
  );
};

const Component = () => (
  <div>
    Component, at the very basic level, is JS function that returns JSX (see
    this video https://www.youtube.com/watch?v=Tn6-PIqc4UM&t=14)
  </div>
);

const ComponentWithProps = ({ name, age }) => (
  <div>
    Component with props of name: {name}, and age: {age}
  </div>
);

const ComponentWithinComponent = () => (
  <div>
    <div>This component is calling these components:</div>
    <Component />
    <ComponentWithProps name="Dave" age="17" />
  </div>
);

const ReactFragment = () => (
  <React.Fragment>
    <div>React fragment is used</div>
    <div>When we need to return multiple children</div>
    <div>Because react element must exist only of exactly one children</div>
  </React.Fragment>
);

const ReactFragmentImplicit = () => (
  <>
    <div>You can call React Fragment</div>
    <div>With only declaring angle brackets</div>
  </>
);

const HelpfulJSXElements = () => (
  <>
    <h1>{'h1'} is used for headings. Try other headings from h2 to h6</h1>
    <div>
      {'<div>'} is used for grouping multiple elements as well as for simple
      text
    </div>
    <img src="https://via.placeholder.com/150" alt="placeholder" />
    <input
      type="text"
      placeholder="input is used for data entry. There are multiple types of input other than text"
    />
    <button onClick={() => console.log('clicked')}>
      {'<button>'} is used for capturing click event. Open console
    </button>
  </>
);

const ComponentWithState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>This component has a counter state with value: {counter}</div>
      <div>You can increment the value with this button</div>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <div>Or you can decrement the value with this button</div>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
    </>
  );
};

const BasicJS2 = () => {
  // TO DO: Basic JS 2
  return (
    <div>
      Here we'll talk about first class citizen function, lambda function, and
      one liner expressions
    </div>
  );
};

const LoopsAndConditions = () =>
  [1, 2, 3, 4, 5].map((e, idx) => (
    <div key={idx}>
      This loops for elements inside array. Current number is: {e}
    </div>
  ));

const CheatSheets = () => (
  <>
    <BasicJS />
    <Component />
    <ComponentWithProps name="Dave" age="17" />
    <ComponentWithinComponent />
    <ComponentOnAnotherDirectory />
    <ReactFragment />
    <ReactFragmentImplicit />
    <HelpfulJSXElements />
    <ComponentWithState />
    <BasicJS2 />
    <LoopsAndConditions />
  </>
);

export default CheatSheets;
