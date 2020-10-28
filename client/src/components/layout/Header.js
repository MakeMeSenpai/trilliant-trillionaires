import React, { useState } from "react"
import { useAuth } from '../auth/contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import { Button } from 'react-bootstrap'



// navbar 
export default function Header() {
    const [error, setError] = useState('')
    const { currentUser } = useAuth()
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }


    return (
        <header id="header">
            <div className="title-container">
                <Link to="/catelog" className='title-link'>
                    <h1 className="title"> Trilliant</h1>
                </Link>

                {currentUser && (
                    <Button variant="primary" onClick={handleLogout}>Logout</Button>)

                }

            </div>
        </header>
    )
}
