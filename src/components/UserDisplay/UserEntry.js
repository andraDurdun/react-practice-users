const UserEntry = (props) => {
    return (
        <li className="user-entry">
            {`${props.user.username} (${props.user.age} years old)`}
        </li>
    )
}

export default UserEntry;