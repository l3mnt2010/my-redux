import React from "react";
import { useSelector } from "react-redux";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}
interface AddTodoAction {
  type: "ADD_TODO";
  payload: Todo;
}

function TodoList() {
  const todos = useSelector((state: TodoState) => state.todos);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{index}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
