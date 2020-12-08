import React, { useRef, useState } from "react"
import { useAuth } from './contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import { FaLessThan, FaSlidersH } from "react-icons/fa"
import Background from './image/Background.jpg'

import './Form.css'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const displayNameRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        // check validation
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')

        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/catalog")

        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }

    var sectionStyle = {
        width: "100",
        height: "100",
        backgroundImage: "url(" + Background + ")"
    };


    return (

        <section style={sectionStyle}
        >

            <div className="align">

                <form onSubmit={handleSubmit} className="form" >

                    {error}

                    <label htmlFor="register-email">Email</label>

                    <input
                        id="register-email"
                        type="email"
                        ref={emailRef}
                        placeholder="Enter Email Address"

                    />

                    <label htmlFor="register-password">Password</label>
                    <input
                        id="register-password"
                        type="password"
                        ref={passwordRef}
                        placeholder="Enter Password"

                    />
                    <label htmlFor="register-password">Verify Password</label>

                    <input
                        type="password"
                        placeholder="Verify password"
                        ref={passwordConfirmRef}

                    />



                    <button disabled={loading} type="submit" className="btn-login">Sign Up</button>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Log in</Link>
                    </div>
                </form>
            </div>
        </section>
    )

}