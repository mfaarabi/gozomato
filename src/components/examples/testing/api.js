export const apiCall = input =>
  Promise.resolve(
    input === 'default'
      ? 'this is for default'
      : input === 'a'
      ? 'this is for a'
      : 'this is for else'
  );
