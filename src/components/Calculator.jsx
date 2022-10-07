import { useState } from "react";
import {
  CalculatorComputeContainer,
  CalculatorContainer,
  CalculatorNumberContainer,
  CalculatorNumberContent,
  CalculatorNumberTab,
} from "../styled/Calculator";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastifyProps = {
  position: "top-left",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  style: {
    borderRadius: "10px",
  },
};

const Calculator = () => {
  const digits = [];
  for (let i = 1; i < 10; i++) {
    digits.push(
      <CalculatorNumberContent key={i}>
        <CalculatorNumberTab onClick={() => updateCalc(i.toString())}>
          {i}
        </CalculatorNumberTab>
      </CalculatorNumberContent>
    );
  }
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["+", "-", "*", "/"];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      toast.error("Invalid Operation!", ToastifyProps);
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)) {
      // eslint-disable-next-line
      setResult(eval(calc + value).toString());
    }
  };

  const calculateResult = () => {
    // eslint-disable-next-line
    setCalc(eval(calc).toString());
  };

  const deleteLastCharacter = () => {
    if (calc === "") {
      return;
    }

    const newValue = calc.slice(0, -1);
    setCalc(newValue);
  };

  return (
    <CalculatorContainer>
      <CalculatorComputeContainer>
        <p>
          {result ? (
            <span
              style={{
                margin: "10px",
                fontSize: "20px",
              }}
            >
              ({result})
            </span>
          ) : (
            ""
          )}
          {calc || 0}
        </p>
      </CalculatorComputeContainer>
      <CalculatorNumberContainer>
        {digits}
        <CalculatorNumberContent>
          <CalculatorNumberTab onClick={() => updateCalc("0")}>
            0
          </CalculatorNumberTab>
        </CalculatorNumberContent>
        <CalculatorNumberContent>
          <CalculatorNumberTab onClick={() => updateCalc(".")}>
            .
          </CalculatorNumberTab>
        </CalculatorNumberContent>
        <CalculatorNumberContent>
          <CalculatorNumberTab onClick={() => updateCalc("+")}>
            +
          </CalculatorNumberTab>
        </CalculatorNumberContent>
        <CalculatorNumberContent>
          <CalculatorNumberTab onClick={() => updateCalc("-")}>
            -
          </CalculatorNumberTab>
        </CalculatorNumberContent>
        <CalculatorNumberContent>
          <CalculatorNumberTab onClick={() => updateCalc("*")}>
            *
          </CalculatorNumberTab>
        </CalculatorNumberContent>
        <CalculatorNumberContent>
          <CalculatorNumberTab onClick={() => updateCalc("/")}>
            /
          </CalculatorNumberTab>
        </CalculatorNumberContent>
        <CalculatorNumberContent>
          <CalculatorNumberTab onClick={() => calculateResult()}>
            =
          </CalculatorNumberTab>
        </CalculatorNumberContent>
        <CalculatorNumberContent>
          <CalculatorNumberTab onClick={() => deleteLastCharacter()}>
            DEL
          </CalculatorNumberTab>
        </CalculatorNumberContent>
        <CalculatorNumberContent>
          <CalculatorNumberTab onClick={() => deleteLastCharacter()}>
            CLS
          </CalculatorNumberTab>
        </CalculatorNumberContent>
      </CalculatorNumberContainer>
      <ToastContainer />
    </CalculatorContainer>
  );
};

export default Calculator;
