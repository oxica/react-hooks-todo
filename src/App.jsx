import { useState } from 'react';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
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
    <div>
      <h1 className="title">My Todo List</h1>
      <center>
        <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
        <TodoList
          todos={todos}
          toggleTodoComplited={toggleTodoComplited}
          removeTodo={removeTodo}
        />
      </center>
    </div>
  );
};
