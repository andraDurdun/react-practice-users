import "./NewUserForm.css";
import { useState } from "react";

const NewUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addNewUserSubmitHandler = (event) => {
    event.preventDefault();

    if (username === "" || age === "") {
      props.setWarningMessage("Please enter an username and age.");
      props.isInvalidInput();
      return;
    }

    if (age < 0) {
      props.setWarningMessage("Please enter a valid age, greater than 0.");
      props.isInvalidInput();
      return;
    }

    const newUser = {
      key: Math.random(),
      username: username,
      age: +age,
    };
    console.log(newUser);
    setUsername("");
    setAge("");
    props.addNewUser(newUser);
  };

  return (
    <form className="new-user-form" onSubmit={addNewUserSubmitHandler}>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label>Age (Years)</label>
      <input
        type="number"
        name="age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default NewUserForm;
