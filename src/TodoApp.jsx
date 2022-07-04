import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/api/todosApi";

export const TodoApp = () => {
  const [todoId, settodoId] = useState(1);
  const { data: todo } = useGetTodoQuery(todoId);
  return (
    <>
      <h1>TodoApp - RTK Query</h1>
      <hr />
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={() => settodoId(todoId - 1)}>Previus Todo</button>
      <button onClick={() => settodoId(todoId + 1)}>Nexto Todo</button>
    </>
  );
};
