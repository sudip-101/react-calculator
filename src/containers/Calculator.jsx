import React, { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  return (
    <div className="calculator">
      <Input result={result} />
      <Button result={result} setResult={setResult} />
    </div>
  );
};

export default Calculator;
