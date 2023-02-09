import { useState } from "react";
import { addNumbers, minusNumbers } from "./calculatorSlice";
import { useSelector, useDispatch } from "react-redux";
export const CalculatorLayout = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const dispatch = useDispatch();
  const { result, isFetching } = useSelector((state) => state.calculator);
  console.log("SK@9", result);
  const onAddNumbers = () => {
    if (!num1 || !num2) {
      alert("Hey enter Numbers");
    }
    dispatch(addNumbers({ num1, num2 }));
  };
  const onMinusNumbers = () => {
    if (!num1 || !num2) alert("Enter Valid Number");
    dispatch(minusNumbers({ num1, num2 }));
  };
  return (
    <>
      <p>{isFetching ? "Please Wait" : result}</p>
      <div>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button onClick={onAddNumbers}>Add</button>
      <button onClick={onMinusNumbers}>Minus</button>
    </>
  );
};
