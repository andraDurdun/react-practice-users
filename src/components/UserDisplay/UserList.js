import "./UserList.css";
import UserEntry from "./UserEntry";

const UserList = (props) => {

  return (
    <div className={`user-list ${props.className}`}>
      <ul>
        {props.users.map((user) => (
          <UserEntry key={user.key} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
