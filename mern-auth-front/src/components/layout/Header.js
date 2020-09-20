import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import AuthOptions from '../auth/AuthOptions'

import UserContext from "../../context/UserContext";



// navbar 
export default function Header() {
    const { userData } = useContext(UserContext);
    return (
        <header id="header">
            <div className="page">


                {userData.user ? (
                    <h2>Welcome {userData.user.displayName}</h2>
                ) : (
                        <>
                            <h3>You are not logged in</h3>
                        </>
                    )}
            </div>
            <Link to="/">
                <h1 className="title" > Trilliant</h1>


            </Link>
            <AuthOptions />
        </header>
    )
}
