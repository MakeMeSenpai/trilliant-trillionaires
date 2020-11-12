import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from './components/layout/Header'
import './style.css'
import Home from './components/pages/Home'
import Landing from './components/pages/Landing'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup';
import { AuthProvider } from './components/auth/contexts/AuthContext';

// import ReactGA from 'react-ga';


// export const initGA = () => {
//     console.log("GA init")
//     ReactGA.initialize("G-1ZGEV4257C")
// }

// export const logPageView = () => {
//     ReactGA.set({ page: window.location.path })
//     ReactGA.pageview(window.location.pathname)
// }

export default function App() {
    // initGA()
    // logPageView()
    return (
        <div>
            <BrowserRouter>
                <AuthProvider>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Landing} />

                        <Route exact path="/catelog" component={Home} />

                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                    </Switch>
                </AuthProvider>
            </BrowserRouter>
        </div>
    )
}

