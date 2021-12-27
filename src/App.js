import { useState, useEffect } from "react";
import Form from "./components/Form.jsx";
import retrieveLocalStorage from "./helpers/retrieveLocalStorage.js";
import setLocalStorage from "./helpers/setLocalStorage.js";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSetUserName = (e) => {
    const userName = e.target.value;
    setUserName(userName);
  };

  const handleSetPassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      userName,
      password,
    };

    setUser(user);
    alert(JSON.stringify(user));
  };

  useEffect(() => {
    return () => {
      if (userName || password) {
        setLocalStorage("loginID", [userName, password]);
      }
    };
  });

  useEffect(() => {
    const info = retrieveLocalStorage("loginID");
    setUserName(info ? info[0] : null);
    setPassword(info ? info[1] : null);
  }, []);
  return (
    <>
      <h1>Login Page</h1>
      <div className="form-container">
        <Form
          handleSetUserName={handleSetUserName}
          handleSetPassword={handleSetPassword}
          handleSubmit={handleSubmit}
          userName={userName}
          password={password}
        />
      </div>
    </>
  );
}

export default App;
