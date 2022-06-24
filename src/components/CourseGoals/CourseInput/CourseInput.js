import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   &label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   &input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }
//   &.invalid input {
//     border-color: red;
//     background: #e2bad5;
//   }

//   &input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid label {
//     color: red;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${false ? "inValid" : ""}`}>
        <label style={{ color: !enteredValue ? "red" : "black" }}>
          Course Goal
        </label>
        <input
          style={{
            borderColor: !enteredValue ? "red" : "black",
            backgroundColor: !enteredValue ? "salmon" : "transparent",
          }}
          type="text"
          value={enteredValue}
          onChange={(e) => setEnteredValue(e.target.value)}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
