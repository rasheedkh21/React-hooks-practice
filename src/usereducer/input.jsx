import React, { useReducer } from 'react';

const initialState = { value: '' };

function reducer (state, action) {
  switch (action.type) {
    case 'update':
      return { value: action.payload };
    default:
      throw new Error();
  }
}

function InputField() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Input Field</h2>
      <input
        type="text"
        value={state.value}
        onChange={(e) => dispatch({ type: 'update', payload: e.target.value })}
      />
      <p>Value: {state.value}</p>
    </div>
  );
}

export default InputField;