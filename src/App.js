import React, { useState } from "react";
import "./App.css";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserDisplay/UserList";
import Modal from "./components/UI/Modal";

function App() {
  const initialUsers = [
    { key: Math.random(), username: "Andra", age: 29 },
    { key: Math.random(), username: "Alex", age: 30 },
    { key: Math.random(), username: "Roxi", age: 28 },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const addNewUserHandler = (newUser) => {
    setUsers((prevState) => [...prevState, newUser]);
    console.log("new user added");
  };

  return (
    <div onClick={() => setShowWarning(false)}>
      {showWarning && (
        <Modal text={warningMessage} closeModal={() => setShowWarning(false)} />
      )}
      <NewUser
        className={showWarning && "blur-background"}
        addNewUser={addNewUserHandler}
        isInvalidInput={() => setShowWarning(true)}
        setWarningMessage={(text) => setWarningMessage(text)}
      />
      <UserList className={showWarning && "blur-background"} users={users} />
    </div>
  );
}

export default App;
