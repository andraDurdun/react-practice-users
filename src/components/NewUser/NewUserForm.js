import "./NewUserForm.css"

const NewUserForm = () => {
  return (
    <form className="new-user-form">
      <label>Username</label>
      <input type="text" />
      <label>Age (Years)</label>
      <input type="number" />
    </form>
  );
};

export default NewUserForm;
