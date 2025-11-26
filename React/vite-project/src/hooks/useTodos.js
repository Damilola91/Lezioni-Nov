import { useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const formattedDate = new Date().toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    setTodos((prev) => [
      { id: Date.now(), text, completed: false, createdAt: formattedDate },
      ...prev,
    ]);
  };

  const toggleTodo = (id) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  const editTodo = (id, newText) =>
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );

  return { todos, addTodo, toggleTodo, deleteTodo, editTodo };
};

export default useTodos;
