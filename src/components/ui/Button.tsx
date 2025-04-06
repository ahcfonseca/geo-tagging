type ButtonProps = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "danger" | "outline";
  outlineColor?: string;
  iconPosition?: "left" | "right";
  onButtonClick?: () => void;
};

function Button({
  children,
  type = "primary",
  outlineColor,
  iconPosition = "left",
  onButtonClick,
}: ButtonProps) {
  const styles = {
    border: `1px solid ${outlineColor}`,
    color: outlineColor,
    svg: {
      fill: outlineColor,
    },
  };

  return (
    <button
      style={outlineColor ? styles : {}}
      onClick={onButtonClick}
      className={`button button--${type} button--icon-${iconPosition}`}
    >
      {children}
    </button>
  );
}

export default Button;
