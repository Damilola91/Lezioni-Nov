const Input = ({ value, onChange, placeholder = "", className = "" }) => {
  return (
    <input
      className={`todo-input ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
