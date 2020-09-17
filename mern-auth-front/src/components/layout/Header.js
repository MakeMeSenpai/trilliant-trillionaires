import React from 'react'
import { Link } from "react-router-dom"
import AuthOptions from '../auth/AuthOptions'


// navbar 
export default function Header() {
    return (
        <header id="header">
            <Link to="/">
                <h1 className="title" > Trilliant</h1>
            </Link>
            <AuthOptions />
        </header>
    )
}
