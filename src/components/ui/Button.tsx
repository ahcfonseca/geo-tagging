type ButtonProps = {
  children: React.ReactNode;
  type?: "primary" | "danger";
  onButtonClick?: () => void;
};

function Button({ children, type, onButtonClick }: ButtonProps) {
  return (
    <button onClick={onButtonClick} className={`button button--${type}`}>
      {children}
    </button>
  );
}

export default Button;
