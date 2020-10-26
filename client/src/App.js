import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from 'axios';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Header from './components/layout/Header'
import './style.css'
import UserContext from './context/UserContext';
import Home2 from './components/pages/Home2'
import Cardhome from './components/Cardhome'
import Landing from './components/pages/Landing'

export default function App() {
    // stores token and user and it's undefined when app starts
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });

    // when app starts it runs this function
    useEffect(() => {
        const checkLoggedIn = async () => {
            // grab token from local storage
            let token = localStorage.getItem("auth-token");
            // if token doesnt exist
            if (token === null) {
                // set token to empty sting
                localStorage.setItem("auth-token", "");
                token = "";
            }
            // if token is not null set the header to the token
            const tokenRes = await Axios.post(
                "http://localhost:5000/users/tokenIsValid",
                null,
                { headers: { "x-auth-token": token } }
            );
            // if the token is valid get the user data that belongs to current token
            if (tokenRes.data) {
                const userRes = await Axios.get("http://localhost:5000/users/", {
                    headers: { "x-auth-token": token },
                });
                // set user data so all the components can access it
                setUserData({
                    token,
                    user: userRes.data,
                });
            }
        };
        checkLoggedIn();
    }, []);



    return (
        <div>
            <BrowserRouter>
                {/* creates states than shared with other components */}
                <UserContext.Provider value={{ userData, setUserData }}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Landing} /> 
                        <Route exact path="/catelog" component={Home2} />
                        {/* <Route exact path="/" component={Home} /> */}
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/Register" component={Register} />
                    </Switch>
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    )
}

