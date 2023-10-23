import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { useEffect } from "react";
import "./Header.css";

const Header = () => {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  useEffect(() => {
    const id = null;
    const pw = null;
    console.log("no");
    if (
      sessionStorage.getItem("username") &&
      sessionStorage.getItem("password")
    ) {
      const id = sessionStorage.getItem("username");
      const pw = sessionStorage.getItem("password");
      authContext.login(id, pw);
      console.log("in");
    }
  }, [authContext]);

  const username = authContext.username;

  const logout = () => {
    authContext.logout();
  };

  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {!isAuthenticated && (
                  <Link className="nav-link" to="/auth">
                    SignUp
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {!isAuthenticated && (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isAuthenticated && (
                  <Link className="nav-link" to="/post/posting">
                    Posting
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isAuthenticated && (
                  <Link className="nav-link" to="/" onClick={logout}>
                    Logout
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
