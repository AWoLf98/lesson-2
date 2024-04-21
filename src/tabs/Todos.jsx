import { Text, Form, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onDelete = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const getQuery = text => {
    setTodos(prev => [...prev, { text, id: nanoid() }]);
  };

  return (
    <>
      <Form getQuery={getQuery} />
      <TodoList onDelete={onDelete} todos={todos} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
