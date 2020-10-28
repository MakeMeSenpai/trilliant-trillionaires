import React, { useRef, useState } from "react"
import { useAuth } from './contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"

export default function Login() {


    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/catelog")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }
    return (

        <div className="page">
            <h2>Log in</h2>

            <form onSubmit={handleSubmit} className="form" >
                {error}
                <label htmlFor="login-email">Email</label>
                <input
                    id="login-email"
                    type="email"
                    ref={emailRef}
                    required

                />

                <label htmlFor="login-password">Password</label>
                <input
                    id="login-password"
                    type="password"
                    type="password"
                    ref={passwordRef}
                    required

                />

                <button disabled={loading} type="submit" value="Log in">Login</button>

                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
            </form>
        </div>
    );


}
