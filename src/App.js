import React from "react";
import "./App.css";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserDisplay/UserList";

function App() {
  return (
    <div>
      <NewUser />
      <UserList />
    </div>
  );
}

export default App;
