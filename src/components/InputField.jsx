import React from 'react';

export const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input
        className="text"
        value={text}
        onChange={e => handleInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add todo</button>
    </label>
  );
};
