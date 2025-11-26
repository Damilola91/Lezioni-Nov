import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Plus } from "lucide-react";

const TodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return;
    onAddTodo(trimmedText);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <Input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Aggiungi un nuovo Task..."
      />
      <Button type="submit">
        <Plus size={16} />
        Aggiungi
      </Button>
    </form>
  );
};

export default TodoForm;
