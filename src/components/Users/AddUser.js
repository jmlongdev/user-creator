import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredJob, setEnteredJob] = useState("");
  const [error, setError] = useState();

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const enteredJobhandler = (event) => {
    setEnteredJob(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length < 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (enteredJob.trim().length === 0) {
      setError({
        title: "Please enter job",
        message: "It helps if you put what you do!",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge, enteredJob);
    setEnteredName("");
    setEnteredAge("");
    setEnteredJob("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <section>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={enteredName}
              onChange={enteredNameHandler}
              type="text"
            />
          </section>
          <section>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              value={enteredAge}
              onChange={enteredAgeHandler}
              type="number"
            />
          </section>
          <section>
            <label htmlFor="job">What is your occupation?</label>
            <input
              id="job"
              value={enteredJob}
              onChange={enteredJobhandler}
              type="text"
            />
          </section>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
