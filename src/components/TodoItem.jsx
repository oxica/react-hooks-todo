import React from 'react';

export const TodoItem = ({
  id,
  text,
  complited,
  toggleTodoComplited,
  removeTodo,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={complited}
        onChange={() => toggleTodoComplited(id)}
      />
      <span>{text}</span>
      <span className="btn" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};
