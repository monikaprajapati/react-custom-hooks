import React from "react";

const useInput = (checkValidity: any) => {
  const [enteredValue, setEnteredValue] = React.useState("");
  const [isTouched, setTouched] = React.useState(false);

  const isValidValue = checkValidity(enteredValue);
  const hasError = !isValidValue && isTouched;

  const valueChangeHandler = (event: any) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setTouched(false);
  };

  return {
    value: enteredValue,
    isValidInput: isValidValue,
    hasError,
    inputChangeHandler: valueChangeHandler,
    inputBlurHandler: valueBlurHandler,
    reset,
  };
};

export default useInput;
