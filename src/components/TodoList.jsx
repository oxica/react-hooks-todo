import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, toggleTodoComplited, removeTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todos}
          toggleTodoComplited={toggleTodoComplited}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};
