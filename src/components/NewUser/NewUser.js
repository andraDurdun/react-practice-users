import NewUserForm from "./NewUserForm";
import "./NewUser.css"

const NewUser = () => {
    return (
        <div className="new-user">
            <NewUserForm/>
            <button type="submit">Add User</button>
        </div>
    )

}

export default NewUser;