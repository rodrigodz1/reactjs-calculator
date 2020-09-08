import React, { useState } from "react";
import "./Calculator.css";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

export default (props) => {
  const [num, setNum] = useState(0);

  function addNumber(number) {
    number === 0 ? setNum(number) : setNum("");
  }
  function setOperation() {}
  function clearMemory() {
    setNum(0);
  }

  return (
    <div className="calc">
      <Display value={num} />
      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={setOperation} operation />
      <Button label="1" click={addNumber} />
      <Button label="2" click={addNumber} />
      <Button label="3" click={addNumber} />
      <Button label="*" click={setOperation} operation />
      <Button label="4" click={addNumber} />
      <Button label="5" click={addNumber} />
      <Button label="6" click={addNumber} />
      <Button label="-" click={setOperation} operation />
      <Button label="7" click={addNumber} />
      <Button label="8" click={addNumber} />
      <Button label="9" click={addNumber} />
      <Button label="+" click={setOperation} operation />
      <Button label="0" click={addNumber} double />
      <Button label="." click={addNumber} />
      <Button label="=" click={setOperation} operation />
    </div>
  );
};
