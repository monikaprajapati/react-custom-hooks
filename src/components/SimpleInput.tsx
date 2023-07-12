import React from "react";
import useInput from "src/hooks/use-input";

const SimpleInput = (props: any) => {
  const validateEmpty = (value: string) => value.trim() !== "";
  const {
    value: name,
    hasError,
    isValidInput,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput(validateEmpty);

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (hasError) {
      return;
    }

    reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
        />
        { isValidInput ? "" : <p>Name shouldn't Empty</p> }
      </div>
      <div className="form-actions">
        <button disabled={hasError}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
