import React from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <Card>
      <form onSubmit={addUserHandler} className={styles["input"]}>
        <section>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
        </section>
        <section>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" min="0" max="100" />
        </section>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
