import { useState } from "react";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUserName] = useState("");

  const [password, setPassWord] = useState("");

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const authContext = useAuth();

  const navigate = useNavigate();

  const handleUserNameCheck = (event) => {
    setUserName(event.target.value);
  };
  const handlePasswordCheck = (event) => {
    setPassWord(event.target.value);
  };
  const handleSubmit = async () => {
    if (await authContext.login(username, password)) {
      navigate(`/`);
    } else {
      setShowErrorMessage(true);
    }
  };
  return (
    <div className="login-board">
      <h1>Login!</h1>
      <div>
        <label>username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUserNameCheck}
        />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" onChange={handlePasswordCheck} />
      </div>
      {showErrorMessage && <div className="errorMessage">!Login Failed!</div>}
      <div>
        <button type="button" name="Login" onClick={handleSubmit}>
          login
        </button>
      </div>
    </div>
  );
};
export default Login;
