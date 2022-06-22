import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length < 0) return;
    if (+enteredAge < 1) return;
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <section>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={enteredName}
              onChange={enteredNameHandler}
              type="text"
              required
            />
          </section>
          <section>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              value={enteredAge}
              onChange={enteredAgeHandler}
              type="number"
              min="0"
              max="100"
              required
            />
          </section>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
