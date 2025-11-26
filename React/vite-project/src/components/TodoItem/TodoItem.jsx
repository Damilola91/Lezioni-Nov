import { useState } from "react";
import Checkbox from "../CheckBox";
import Button from "../Button/Button";
import { Trash2, Pencil, Save, X } from "lucide-react";

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draftText, setDraftText] = useState(todo.text);

  const confirmEdit = () => {
    const trimmedText = draftText.trim();
    if (!trimmedText) return;
    onEdit(todo.id, trimmedText);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setDraftText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    event.key === "Enter" && confirmEdit();
    event.key === "Escape" && cancelEdit();
  };

  return (
    <div
      className={`todo-item ${todo.completed ? "todo-item--completed" : ""}`}
    >
      <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />

      <div className="todo-main">
        {isEditing ? (
          <input
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="todo-input"
            autoFocus
          />
        ) : (
          <span className="todo-text">{todo.text}</span>
        )}

        <span className="todo-date">Creato il {todo.createdAt}</span>
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <>
            <Button variant="primary" onClick={confirmEdit}>
              <Save size={16} />
            </Button>

            <Button variant="ghost" onClick={cancelEdit}>
              <X size={16} />
            </Button>
          </>
        ) : (
          <Button variant="ghost" onClick={() => setIsEditing(true)}>
            <Pencil size={16} />
          </Button>
        )}

        <Button variant="danger" onClick={() => onDelete(todo.id)}>
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
