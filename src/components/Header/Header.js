import React from "react";

import classes from "./Header.module.css";
import user from "../../assets/user1.jpg";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>Create User</h1>
      <img alt="user" src={user} />
    </header>
  );
};

export default Header;
