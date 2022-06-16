import "./UserList.css";
import UserEntry from "./UserEntry";
import { useState } from "react";

const UserList = () => {
  const initialUsers = [
    { username: "Andra", age: 29 },
    { username: "Alex", age: 30 },
    { username: "Roxi", age: 28 },
  ];

  const [users, setUsers] = useState(initialUsers);

  return (
    <div className="user-list">
      <ul>
        {users.map((user) => (
          <UserEntry user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
