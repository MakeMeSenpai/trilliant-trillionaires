import React, { useState } from "react";
import { useAuth } from "../auth/contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Header.css";

// This component renders the navbar
export default function Header() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <header id="header">
      <div className="title-container">
        <Link to="/catalog" className="title-link">
          <h1 className="title"> Trilliant</h1>
        </Link>
        {!currentUser && (
          <Link to="/login" className="form-link">
            Login
          </Link>
        )}
        {currentUser && (
          <Link variant="primary" className="form-link" onClick={handleLogout}>
            {" "}
            Logout
          </Link>
        )}
      </div>
    </header>
  );
}
