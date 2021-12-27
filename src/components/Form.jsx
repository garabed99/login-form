function Form({
  handleSetUserName,
  handleSetPassword,
  handleSubmit,
  userName,
  password,
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Username"
        onChange={handleSetUserName}
        value={userName}
        name="userName"
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={handleSetPassword}
        value={password}
        name="password"
        required
      />
      <br />
      <button onClick={handleSubmit} disabled={!userName || !password}>
        Login
      </button>
    </form>
  );
}

export default Form;
