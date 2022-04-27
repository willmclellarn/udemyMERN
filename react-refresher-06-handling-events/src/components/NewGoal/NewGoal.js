import React, { useState } from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = (event) => {
    event.preventDefault();
    console.log(event);

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };
    props.onAddGoal(newGoal);
    setEnteredText("");
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;