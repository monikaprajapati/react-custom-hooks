import React from "react";
import useInput from "src/hooks/use-input";

const BasicForm: React.FC<any> = (props) => {
  const validateNotEmpty = (value: string) => value.trim() !== "";
  const validateEmailField = (value: string) => value.trim().includes("@");

  const {
    inputChangeHandler: fnameChange,
    inputBlurHandler: fnameBlur,
    value: fname,
    hasError: firstNameHasError,
    isValidInput: isValidFname,
    reset: resetFirstName,
  } = useInput(validateNotEmpty);

  const {
    inputChangeHandler: lnameChange,
    inputBlurHandler: lnameBlur,
    value: lname,
    hasError: lastNameHasError,
    reset: resetLastName,
    isValidInput: isValidLname,
  } = useInput(validateNotEmpty);

  const {
    inputChangeHandler: emailChange,
    inputBlurHandler: emailBlur,
    value: email,
    hasError: emailHasError,
    reset: resetEmail,
    isValidInput: isValidEmail,
  } = useInput(validateEmailField);

  let formIsValid = false;

  if (isValidFname && isValidLname && isValidEmail) {
    formIsValid = true;
  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            value={fname}
            onChange={fnameChange}
            onBlur={fnameBlur}
          />
        </div>
      </div>
      {firstNameHasError ? (
        <p className="error-text">First Name is not valid</p>
      ) : (
        ""
      )}
      <div className="control-group">
        <div className={lastNameClasses}>
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            value={lname}
            onChange={lnameChange}
            onBlur={lnameBlur}
          />

          {lastNameHasError ? (
            <p className="error-text">Last Name is not valid</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChange}
          onBlur={emailBlur}
        />
      </div>
      {emailHasError ? <p className="error-text">Email is not valid</p> : ""}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
