import React, { useState } from "react";

import Header from "./components/Header/Header";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Footer from "./components/Footer/Footer";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (userName, userAge, userJob) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: userName,
          age: userAge,
          job: userJob,
          id: Math.random().toString(),
        },
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
      <Header />
      <AddUser onAddUser={addUsersHandler} />
      {content}
      <Footer />
    </div>
  );
}

export default App;
