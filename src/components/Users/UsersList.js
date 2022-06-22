import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id} id={user.id} onDelete={props.onDeleteUser}>
            {user.name} ({user.age} years old)
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
