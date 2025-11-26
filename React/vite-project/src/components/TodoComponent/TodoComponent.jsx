import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

import useTodos from "../../hooks/useTodos";
import { Moon, Sun } from "lucide-react";

const TodoComponent = () => {
  const { isDarkMode, toggleThemeMode } = useContext(ThemeContext);
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodos();

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">ToDo List Avanzata</h1>
        <button className="theme-toggle-btn" onClick={toggleThemeMode}>
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      <TodoForm onAddTodo={addTodo} />

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
};
export default TodoComponent;
