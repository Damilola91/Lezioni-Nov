const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case "danger":
        return "btn btn-danger";
      case "ghost":
        return "btn btn-ghost";
      case "filter":
        return "btn btn-filter";
      default:
        return "btn btn-primary";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${getVariantClass()} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
