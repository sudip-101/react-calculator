import React, { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import "./Calculator.css";

const Calculator: React.FC = () => {
  const [result, setResult] = useState<string>("");

  return (
    <div className="calculator">
      <Input result={result} />
      <Button result={result} setResult={setResult} />
    </div>
  );
};

export default Calculator;
