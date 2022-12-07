import TodoCard from "./TodoCard";
export const TodoList = ({ todoList, todos, setTodos }) => {
  return (
    <ul className="task-card-list">
      {todoList.map((todo) => (
        <TodoCard key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
};
