import React from "react";

import classes from "./UserItem.module.css";

const UserItem = (props) => {
  const deleteUserHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={classes.user} onClick={deleteUserHandler}>
      {props.children}
    </li>
  );
};

export default UserItem;
