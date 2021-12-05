import React from "react";

const Input: React.FC<IInputProps> = ({ result }) => {
  return <div className="input-content">{result}</div>;
};

export default Input;
