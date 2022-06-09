import React from 'react';

const TodoItem = ({ id, text, complited, toggleTodoComplited, removeTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={complited}
        key={id}
        onChange={() => toggleTodoComplited(id)}
      />
      <span className="todo">{text}</span>
      <span className="btn" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
