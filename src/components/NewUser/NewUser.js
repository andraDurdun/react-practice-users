import NewUserForm from "./NewUserForm";
import "./NewUser.css";

const NewUser = (props) => {
  return (
    <div className={props.className}>
      <div className="new-user">
        <NewUserForm
          addNewUser={props.addNewUser}
          isInvalidInput={props.isInvalidInput}
          setWarningMessage={props.setWarningMessage}
        />
      </div>
    </div>
  );
};

export default NewUser;
