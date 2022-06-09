import React from 'react';
import TodoItem from './TodoItem';

export const TodoList = ({ todos, toggleTodoComplited, removeTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          toggleTodoComplited={toggleTodoComplited}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};
