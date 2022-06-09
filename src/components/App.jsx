import { useState } from 'react';
import { InputField } from './InputField';
import { TodoList } from './TodoList';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const AddTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          complited: false,
        },
      ]);
    }
    setText('');
  };

  const removeTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const toggleTodoComplited = todoId => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          complited: !todo.complited,
        };
      })
    );
  };

  return (
    <center>
      <InputField text={text} setText={setText} AddTodo={AddTodo} />
      <TodoList
        todos={todos}
        toggleTodoComplited={toggleTodoComplited}
        removeTodo={removeTodo}
      />
    </center>
  );
};
