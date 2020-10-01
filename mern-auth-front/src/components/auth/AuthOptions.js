import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";


export default function AuthOptions() {
    const { userData, setUserData } = useContext(UserContext);

    const history = useHistory();

    // changes url to /register
    const register = () => history.push("/register")
    // changes url to /login
    const login = () => history.push("/login")

    const logout = () => {
        // sets userdata token and user to undefined
        setUserData({
            token: undefined,
            user: undefined,
        });
        // clears localstorage
        localStorage.setItem("auth-token", "");
    };

    return (
        <nav className="auth-options">
            {userData.user ? (
                <button onClick={logout}>Log out</button>
            ) : (
                    <>
                        <ul className='nav-link-container'>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/login">Log In</a></li>
                        </ul>
                    </>
                )}
        </nav>
    );
}