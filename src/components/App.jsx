import { useState } from 'react';

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
      <label>
        <input
          className="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={AddTodo}>Add todo</button>
      </label>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.complited}
              onChange={() => toggleTodoComplited(todo.id)}
            />
            <span>{todo.text}</span>
            <span className="btn" onClick={() => removeTodo(todo.id)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </center>
  );
};
