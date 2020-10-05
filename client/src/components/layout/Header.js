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
                    <h3>Welcome {userData.user.displayName}</h3>
                ) : (
                        <>
                
                        </>
                    )}
            </div>
            <div className="title-container">
                <Link to="/" className='title-link'>
                    <h1 className="title"> Trilliant</h1>
                </Link>
                <div>
                    <AuthOptions />
                </div>
                
            </div>
        </header>
    )
}
