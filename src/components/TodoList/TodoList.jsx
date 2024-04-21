import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos, onDelete }) => {
  return (
    <Grid>
      {todos.map(({ text, id }, index) => (
        <TodoListItem
          onDelete={onDelete}
          key={id}
          text={text}
          counter={index + 1}
          id={id}
        />
      ))}
    </Grid>
  );
};
