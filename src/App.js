import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  const deleteUserHandler = (userId) => {
    setUsersList((prevUsersList) => {
      const updatedUsers = prevUsersList.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: "center", color: "white" }}>
      No Users found. Try Adding one!
    </p>
  );

  if (usersList.length > 0) {
    content = <UsersList users={usersList} onDeleteUser={deleteUserHandler} />;
  }

  return (
    <div>
      <AddUser onAddUser={addUsersHandler} />
      {content}
    </div>
  );
}

export default App;
