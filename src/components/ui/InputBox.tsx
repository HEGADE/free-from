import React, { ChangeEventHandler } from "react";
interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;

  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputBox: React.FC<InputBoxProps> = ({
  value,
  onChange: validateInput,
  name,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <h4>{placeholder}</h4>
      <input
        {...rest}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={validateInput}
      />
      
    </>
  );
};

export default InputBox;
