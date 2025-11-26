import FilterGroup from "../FilterGroup/FilterGroup";
import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const remaining = todos.filter((t) => !t.completed).length;
  return (
    <>
      <FilterGroup filter={filter} setFilter={setFilter} />

      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <p style={{ fontSize: "14px", opacity: 0.7 }}>
            Nessun task da mostrare.
          </p>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </div>

      <div className="todo-counter">
        {remaining === 0
          ? "Nessun task rimanente 🎉"
          : `${remaining} task rimanenti`}
      </div>
    </>
  );
};

export default TodoList;
