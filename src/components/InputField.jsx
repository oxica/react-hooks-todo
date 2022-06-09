import React from 'react';

export const InputField = ({ text, setText, AddTodo }) => {
  return (
    <label>
      <input
        className="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={AddTodo}>Add todo</button>
    </label>
  );
};
