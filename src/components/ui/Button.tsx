interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
}

function Button({ text, onClick, ...rest }: ButtonProps) {
  return (
    <>
      <div>
        <button {...rest} type="submit" onClick={onClick}>
          {" "}
          {text}{" "}
        </button>
      </div>
    </>
  );
}

export default Button;
