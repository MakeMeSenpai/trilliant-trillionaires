import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from './components/layout/Header'
import './style.css'
import Home2 from './components/pages/Home2'
import Cardhome from './components/Cardhome'
import Landing from './components/pages/Landing'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup';
import { AuthProvider } from './components/auth/contexts/AuthContext';



export default function App() {




    return (
        <div>
            <BrowserRouter>
                <AuthProvider>
                    {/* creates states than shared with other components */}
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/catelog" component={Home2} />


                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        {/* <Route exact path="/" component={Home} /> */}

                    </Switch>
                </AuthProvider>
            </BrowserRouter>
        </div>
    )
}

